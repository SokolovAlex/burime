import React from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../services/contexts/auth';
import { useGame } from '../../services/api/burime';

const Game = () => {
    const router = useRouter();
    const user = useUser();
    const { id } = router.query;
    const { burime, error, loading } = useGame(id, user);
    console.log(burime, error, loading);
    return <>
        <p>{loading.toString()}</p>
        <p>{error}</p>
        <p>Game: {id} - theme: {burime && burime.theme} user: {user && user.email}</p>
    </>
}

export default Game