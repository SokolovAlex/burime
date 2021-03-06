import passport from 'passport';
import  { Express } from 'express';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as VkStrategy } from 'passport-vkontakte';
import { getConnection } from './../db/index';
import { User } from './../db/entities/user';
import { Strategy as LocalStrategy } from 'passport-local';
import { key, secret, serverUrl, vkAppId, vkSecret } from './../config';

import { salt, hash, compare } from './../services/crypt';

export default async (server: Express) => {
    const connection = getConnection();
    const userRepo = await connection.getRepository(User);

    server.use(passport.initialize())
    server.use(passport.session());

    passport.serializeUser((user: User, done) => done(null, user.email))
    passport.deserializeUser(async (email, done) => {
        const user = await userRepo.findOne({ where: { email } });
        done(null, user);
    });

    passport.use(new VkStrategy({
        clientID:     vkAppId,
        apiVersion: '5.110',
        clientSecret: vkSecret,
        callbackURL: `${serverUrl}/auth/vkontakte/callback`,
    }, async (_, __, params, profile, done) => {
            const username =  profile.username;
            let user = await userRepo.findOne({ where: { email: username } });
            if (!user) {
                user = await userRepo.save({
                    name: profile.displayName,
                    email: username,
                    type: 'vk',
                    lastEnterAt: new Date(),
                });
            }
            done(null, user);
    }));

    passport.use(new GoogleStrategy({
        clientID: key,
        clientSecret: secret,
        callbackURL: `${serverUrl}/auth/google/callback`,
    },
        async (_, __, profile, done) => {
            const email = profile.emails[0].value;
            let user = await userRepo.findOne({ where: { email } });
            if (!user) {
                user = await userRepo.save({
                    name: profile.displayName,
                    email,
                    type: 'google',
                    lastEnterAt: new Date(),
                });
            }
            done(null, user);
        }
    ));

    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (username, password, done) => {
            const user = await userRepo.findOne({
                where: { email: username },
                select: ['name', 'password', 'email', 'type']
            });
            if (!user) {
                return done(new Error(`Пользователь ${username} не найден`));
            }
            const validPassport = await compare(user.password as string, password);
            if (!validPassport) {
                return done(new Error('Неверный пароль'));
            }
            done(null, user);
    }));

    passport.use('signup', new LocalStrategy({
        passReqToCallback : true,
        usernameField: 'email',
        passwordField: 'password',
    }, async (req, _, __, done) => {
        const { name, email, password } = req.body;
        const saltedPassword = await hash(password, await salt);
        const user = await userRepo.save({
            name,
            email,
            password: saltedPassword,
            type: 'local',
            lastEnterAt: new Date(),
        });
        done(null, user);
    }));
}