import React from 'react';
import NextApp from 'next/app';
import nCookies from 'next-cookies';
import { status } from '../services/api';
import { UserContext } from '../services/auth';

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const cookies = nCookies(ctx);
    const { user, logged } = await status(cookies);
    return { pageProps: { ...pageProps, user, logged } };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props;
    const { user, logged } = pageProps;
    return (
      <UserContext.Provider value={{user, logged }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    )
  }
}