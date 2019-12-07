import { Express } from 'express';
import passport from 'passport';
import session from 'express-session';

export const addAuthRoutes = async (server: Express) => {
    server.use(session({ secret: 'burime' }))
    server.use(passport.session());

    const logged = (req, res, next) => {
        if (req.isAuthenticated())
            return next();
        res.status(401).json({
            'message': 'access denied'
        });
    }

    server.get('/auth/google', passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));
    server.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        (_, res) => res.redirect('/'));

    server.get('/auth/status', (req, res) => {
        if (!req.session) {
            return res.status(411).json({
                message: 'no session',
            });
        }

        if(false) {
            console.log('-------');
            console.log(`isAuthenticated():`, req.isAuthenticated())
            console.log(`cookies:`, req.cookies)
            console.log(`req.session: ${JSON.stringify(req.session)}`)
            console.log(`req.user: ${JSON.stringify(req.user)}`)
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
                return res.status(401).json(info.message);
            }
            req.logIn(user, () => res.json(user));
        })(req, res);
    });

    server.post('/auth/logout', logged, (req, res) => {
        req.logout();
        res.redirect('/');
    });

    server.post('/auth/registration', (req, res) => {
        passport.authenticate('signup', (error, user, info) => {
            if (error) {
                return res.status(500).json(error);
            }
            if (!user) {
                return res.status(401).json(info.message);
            }
            res.json(user);
        })(req, res);
    });
};