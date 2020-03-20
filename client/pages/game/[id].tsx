import React from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../services/contexts/auth';
import { useGame } from '../../services/api/burime';
import { Layout } from '../../components/organizms/Layout/Layout';
import { Loader } from '../../components/atoms/Loader/Loader';
import BurimeGame from '../../components/organizms/BurimeGame/BurimeGame';

const Game = () => {
    const router = useRouter();
    const user = useUser();
    const { id } = router.query;
    const { burime, error, loading } = useGame(id, user);

    return <Layout>
        { loading
            ? <Loader/>
            : <>
                {error
                    ? <div>{error}</div>
                    : 
                    <>
                        { burime
                            ? <BurimeGame burime={burime} user={user}></BurimeGame>
                            : <div>нет такой игры...</div>
                        }
                    </>
                }
            </>
        }
    </Layout>
}

export default Game