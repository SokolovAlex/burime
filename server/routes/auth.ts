import { clientUrl } from './../config';
import { Express } from 'express';
import passport from 'passport';
import session from 'express-session';

export const addAuthRoutes = async (server: Express) => {
    server.use(session({ secret: 'burime' }))
    server.use(passport.session());

    const logged = (req, res, next) => {
        if (req.isAuthenticated())
            return next();
        res.status(421).json({
            'message': 'access denied'
        });
    }

    server.get('/auth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ]
    }));

    server.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        (_, res) => res.redirect(clientUrl));

    server.get('/auth/status', (req, res) => {
        if (!req.session) {
            return res.status(421).json({
                message: 'no session',
            });
        }

        res.json({
            logged: req.isAuthenticated(),
            user: req.user,
        });
    });

    server.post('/auth/login', (req, res) => {
        passport.authenticate('login', (error, user, info) => {
            if (error) {
                return res.status(500).json(error);
            }
            if (!user) {
                return res.status(201).json(info.message);
            }
            req.logIn(user, () => res.json({
                name: user.name,
                type: user.type,
            }));
        })(req, res);
    });

    server.post('/auth/logout', logged, (req, res) => {
        if (!req.session) {
            try {
                req.logout();
            } catch(error) {
                console.log('logout---->', error)
            } finally{}
            return res.json();
        }
        
        req.session.destroy(function(e){
            try {
                req.logout();
            } catch(error) {
                console.log('logout---->', error)
            } finally{}
            return res.json();
        });
    });

    server.post('/auth/registration', (req, res) => {
        passport.authenticate('signup', (error, user, info) => {
            if (error) {
                return res.status(500).json(error);
            }
            if (!user) {
                return res.status(421).json(info.message);
            }
            res.json(user);
        })(req, res);
    });
};