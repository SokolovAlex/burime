import React from 'react'
import { Layout } from '../components/organizms/Layout/Layout';
import { Chat } from '../components/Chat/Chat'
import { UserSettings } from '../components/organizms/UserSettings/UserSettings';

const Page = () => (
    <Layout>
        <UserSettings></UserSettings>
        <Chat></Chat>
    </Layout>
)

export default Page
