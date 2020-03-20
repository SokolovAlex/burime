import React from 'react'
import { Layout } from '../components/organizms/Layout/Layout';
import { Chat } from '../components/Chat/Chat'
import { MyBurimeList } from '../components/organizms/MyBurimeList/MyBurimeList'

const Page = () => (
    <Layout>
        <MyBurimeList />
        <Chat></Chat>
    </Layout>
)

export default Page
