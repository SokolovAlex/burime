import React from 'react'
import { useRouter } from 'next/router'
import { useFinishedBurime } from '../../services/api/burime';
import { Layout } from '../../components/organizms/Layout/Layout';
import { Loader } from '../../components/atoms/Loader/Loader';
import FinishedBurime from '../../components/organizms/FinishedBurime/FinishedBurime';

const Game = () => {
    const router = useRouter();
    const { id } = router.query;
    const { burime, error, loading } = useFinishedBurime(id);

    return <Layout>
        { loading
            ? <Loader/>
            : <>
                {error
                    ? <div>{error}</div>
                    : 
                    <>
                        { burime
                            ? <FinishedBurime burime={burime}></FinishedBurime>
                            : <div>нет такой игры...</div>
                        }
                    </>
                }
            </>
        }
    </Layout>
}

export default Game