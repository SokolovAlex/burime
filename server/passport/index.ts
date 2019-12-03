import passport from 'passport';
import  { Express } from 'express';
import { OAuthStrategy as GoogleStrategy } from 'passport-google-oauth';
import { getConnection } from './../db/index';
import { User } from './../db/entities/user';
import { Strategy as LocalStrategy } from 'passport-local';
import { key, secret } from './../config.local';

import { salt, hash } from './../services/crypt';

export default async (server: Express) => {
    const connection = getConnection();
    const userRepo = await connection.getRepository(User);

    server.use(passport.initialize())
    server.use(passport.session());

    passport.serializeUser((user: User, done) => done(null, user.email))
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

    passport.use('login', new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    }, async (username, password, done) => {
            console.log('username-->', username);
            console.log('password-->', password);
            let user = await userRepo.findOne({ email: username });
            if (!user) {
                return done(new Error('user not found'));
            }
            if (user.password !== password) {
                return done(new Error('wrong passport'));
            }
            done(null, user);
    }));

    passport.use('signup', new LocalStrategy({
        passReqToCallback : true,
        usernameField: 'login',
        passwordField: 'password',
    }, async (req, _, __, done) => {
        const { name, login, password } = req.body;
        const saltedPassword = await hash(password, await salt);
        const user = await userRepo.save({
            name,
            email: login,
            password: saltedPassword,
            type: 'local',
            lastEnterAt: new Date(),
        });
        done(null, user);
    }));
}