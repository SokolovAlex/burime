import React, { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import ButterToast from 'butter-toast'
import { ga_analitics } from '../../../config';
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
    #__next{
        height: 100%;
    }
    a {
        color: black;
    }
`;

const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
	min-height: 100%;
`;

const MainSection = styled.div`
    flex: 1 0 auto;
`;

interface Props {
    children: ReactNode;
    noAuth?: boolean;
}

export const Layout = ({ children, noAuth }: Props) => {
    const user = useUser();
    return (
        <SocketProvider user={user}>
            <Head>
                <title>Буриме</title>
                <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Neucha&display=swap" rel="stylesheet"/>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"></link>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga_analitics}`}></script>
                <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', "${ga_analitics}");
                ` }}>
                </script>
            </Head>
            <GlobalStyle/>
            <SiteWrapper>
                <Header/>
                <MainSection>
                    { user || noAuth
                        ? <Section>{children}</Section>
                        : <Landing/>
                    }
                </MainSection>
                <Footer/>
            </SiteWrapper>
            <ButterToast timeout={3000} />
        </SocketProvider>
    )
}
