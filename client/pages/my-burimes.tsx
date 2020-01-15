import React from 'react'
import { Layout } from '../components/organizms/Layout/Layout';
import { Chat } from '../components/Chat/Chat'
import { BurimeCalls } from '../components/organizms/BurimeCalls/BurimeCalls'

const Page = () => (
    <Layout>
        <BurimeCalls />
        <Chat></Chat>
    </Layout>
)

export default Page
