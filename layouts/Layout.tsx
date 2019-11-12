import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head'

import { Header } from '../components/Header/Header';
import { Section } from '../components/Section/Section';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    a {
        color: black;
    }
`

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => (
    <React.Fragment>
        <GlobalStyle/>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Oswald|Pacifico" rel="stylesheet"/>
        </Head>
        <Section>
            <Header></Header>
        </Section>
        <Section>
            { children }
        </Section>
    </React.Fragment>
);
