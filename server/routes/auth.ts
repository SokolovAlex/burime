import { User } from './../db/entities/user';
import { getConnection } from './../db';
import  { Express } from 'express';
import passport from 'passport';
import session from 'express-session';
import initPassport from '../passport';

// import { genSalt, hash } from 'bcrypt';
import { genSalt, hash } from './../services/crypt';

export const addAuthRoutes = async (server: Express) => {
    await initPassport(server);
    const connection = getConnection();
    const userRepo = await connection.getRepository(User);
    const salt = await genSalt();

    server.use(session({ secret: 'burime' }))
    server.use(passport.session());

    server.get('/auth/google', passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

    server.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        (_, res) => res.redirect('/'));

    const authenticate = passport.authenticate('local', {session: true});
    server.post('auth/login', (_, res) => {
        console.log('login!!!!');
        res.send({}) ;
    });

    server.post('auth/logout', authenticate, (req, res) => {
        req.logout();
        res.redirect('/');
    });

    //https://code.tutsplus.com/ru/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
    server.post('/auth/registration', async (req, res) => {
        console.log('Registration!');
        console.log(req.body);
        const { name, login, password } = req.body;
        const saltedPassword = await hash(password, salt);
        const user = await userRepo.save({
            name,
            email: login,
            password: saltedPassword,
            type: 'local',
            lastEnterAt: new Date(),
        });
        res.json(user);
    });
};