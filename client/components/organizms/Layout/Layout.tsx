import React, { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import ButterToast from 'butter-toast'

import { Header } from '../../Header/Header'
import { Section } from '../../atoms/Section/Section'
import { useUser } from '../../../services/contexts/auth'
import { SocketProvider } from '../../../services/socket'
import { Landing } from '../Landing/Landing';
import { Footer } from '../../molecules/Footer/Footer'

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-size: 20px;
        font-family: 'Nunito', sans-serif;
    }
    a {
        color: black;
    }
`;

interface Props {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    const user = useUser();
    return (
        <SocketProvider user={user}>
            <GlobalStyle />
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Neucha&display=swap" rel="stylesheet"></link>
            </Head>
            <Header/>
            <Section>
                { user
                    ? children
                    : <Landing/>
                }
            </Section>
            <Footer/>
            <ButterToast timeout={3000} />
        </SocketProvider>
    )
}
