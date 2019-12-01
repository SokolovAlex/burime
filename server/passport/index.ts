import passport from 'passport';
import  { Express } from 'express';
import { OAuthStrategy as GoogleStrategy } from 'passport-google-oauth';
import { getConnection } from './../db/index';
import { User } from './../db/entities/user';
import { Strategy as LocalStrategy } from 'passport-local';
import { key, secret } from './../config.local';

export default async (server: Express) => {
    const connection = getConnection();
    const userRepo = await connection.getRepository(User);

    server.use(passport.initialize())

    passport.serializeUser((user: User, done) => {
        done(null, user.email);
    });

    passport.deserializeUser(async (email, done) => {
        const user = await userRepo.findOne({ email: email as string });
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        consumerKey: key,
        consumerSecret: secret,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
        async (_, __, profile, done) => {
            console.log('profile-->', profile);
            let user = await userRepo.findOne({ email: profile.email });
            if (!user) {
                user = await userRepo.create({
                    name: 'profile',
                    email: profile.email,
                    lastEnterAt: new Date(),
                });
            }
            done(null, user);
        }
    ));

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (username, password, done) => {
            console.log('username-->', username);
            let user = await userRepo.findOne({ email: username });
            if (!user) {
                return done(new Error('user not found'));
            }
            if (user.password !== password) {
                return done(new Error('wrong passport'));
            }
            done(null, user);
    }));
}