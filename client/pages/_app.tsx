import React from 'react';
import NextApp from 'next/app';
import nCookies from 'next-cookies';
import { status } from '../services/api/auth';
import { UserContext } from '../services/contexts/auth';
import { UserModel } from '../models/user';
import ReactGA from 'react-ga';
import { ga_analitics } from '../config';

export default class App extends NextApp<{}, {}, { user: UserModel }> {
    constructor(props) {
        super(props);
        const { pageProps: { user } } = this.props;
        this.state = { user };
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps: any = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const cookies = nCookies(ctx);
        let statusResult;
        try{
            statusResult = await status(cookies);
        } catch {
            statusResult = {};
        }
        const { user, logged } = statusResult;
        return { pageProps: { ...pageProps, user, logged } };
    }

    componentDidMount() {
        ReactGA.initialize(ga_analitics);
    }

    setUser = (user: UserModel) => {
        this.setState({ user });
    };

    render() {
        const { Component, pageProps, router } = this.props;
        const { logged } = pageProps;
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                    logged,
                    setUser: (user: UserModel) => this.setUser(user),
                }}
            >
                <Component {...pageProps} route={router.route}/>
            </UserContext.Provider>
        );
    }
}
