import  { Express } from 'express';
import passport from 'passport';
import session from 'express-session';

export const addAuthRoutes = async (server: Express) => {
    server.use(session({ secret: 'burime' }))
    server.use(passport.session());

    server.get('/auth/google', passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

    server.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        (_, res) => res.redirect('/'));

    const authenticate = passport.authenticate('local', { session: true });
    server.post('/auth/login', passport.authenticate('login', {
        failureFlash : true 
    }));

    server.post('/auth/logout', authenticate, (req, res) => {
        req.logout();
        res.redirect('/');
    });

    server.post('/auth/registration', (req, res, next) => {
        passport.authenticate('signup', (error, user, info) => {
            if (error) {
                return res.status(500).json(error);
            }
            if (!user) {
                return res.status(401).json(info.message);
            }
            res.json(user);
        })(req, res, next);
    });

    // server.post('/auth/registration', (req, res, next) => {
    //     passport.authenticate('signup', (error, user, info) => {
    //         if(error) {
    //             return res.status(500).json(error);
    //         }
    //         if(!user) {
    //             return res.status(401).json(info.message);
    //         }
    //         res.json(user);
    //     })(req, res, next);
    // })
};