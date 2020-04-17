import React from 'react';
import { Layout } from '../components/organizms/Layout/Layout';
import { Chat } from '../components/Chat/Chat';
import { AllBurimeList } from '../components/organizms/AllBurimeList/AllBurimeList';

const Page = () => (
    <Layout>
        <AllBurimeList />
        <Chat></Chat>
    </Layout>
);

export default Page;
