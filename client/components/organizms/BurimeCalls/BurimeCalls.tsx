import React, { useState, useCallback, useEffect } from "react";
import { useSocket } from "../../../services/socket";
import { useUser } from "../../../services/contexts/auth";
import { ButtonWrapper } from './styled';
import { Title } from "../../atoms/Title/Title";
import { Button } from "../../atoms/Button/Button";
import { getCalls, goToGame, useActiveBurime } from "../../../services/api/burime";
import { BurimeEdit } from "../../molecules/BurimeCard/BurimeEdit";
import { BurimeModel } from "../../../models/burime";
import { BurimeCallList } from "../../molecules/BurimeCard/BurimeCallList";
import { Spinner } from '../../atoms/Spinner/Spinner';
import { createBurime, newBurime, deleteBurime, deletedBurime, acceptBurime, acceptedBurime } from "../../../constants/socketEvents";

export const BurimeCalls = () => {
    const user = useUser();
    if (!user) { 
        return null;
    }  
    const socket = useSocket();
    useActiveBurime();
    const [haveCall, setHaveCall] = useState(false);
    const [loading, setLoading] = useState(true);
    const [_, setError] = useState(null);
    const [burimes, setBurimes] = useState<BurimeModel[]>([]);
    const [ edittedBurime, setEdittedBurime ] = useState<BurimeModel>();

    useEffect(() => {
        getCalls()
            .then(data => {
                const burimes = data.burimes;
                const hasMine = burimes.some(burime => burime.user1.email === user.email);
                setBurimes(burimes);
                setHaveCall(hasMine);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const onNewBurime = burime => {
            const newBurimeList = [burime, ...burimes];
            const hasMine = newBurimeList.some(burime => burime.user1.email === user.email);
            setHaveCall(hasMine);
            setBurimes(newBurimeList);
        };
        const removeBurimeById = burimeId => {
            const newBuremiList = burimes.filter(burime => burime.id !== burimeId);
            const hasMine = newBuremiList.some(burime => burime.user1.email === user.email);
            setBurimes(newBuremiList);
            setHaveCall(hasMine);
        }
        const onAcceptBurime = burime => {
            removeBurimeById(burime.id);
            if (user.email === burime.user1.email || user.email === burime.user2.email) {
                goToGame(burime.id);
            }
        };
        socket.on(newBurime, onNewBurime);
        socket.on(acceptedBurime, onAcceptBurime);
        socket.on(deletedBurime, removeBurimeById);
        return () => {
            socket.off(deletedBurime, removeBurimeById);
            socket.off(acceptedBurime, onAcceptBurime);
            socket.off(newBurime, onNewBurime);
        };
    }, [burimes]);

    const changeMode = useCallback(() =>  setEdittedBurime(edittedBurime ? undefined : new BurimeModel()), [edittedBurime]);
    const onSave = useCallback(burime => { 
        socket.emit(createBurime, burime);
        changeMode();
    }, [changeMode]);
    const onReject = useCallback(burime => socket.emit(deleteBurime, burime), []);
    const onAccept = useCallback(burime => {
        burime.user2 = user;
        socket.emit(acceptBurime, burime);
    }, []);

    return <>
        { !edittedBurime &&
            <Title>Приглашения</Title>
        }
        { !(edittedBurime || haveCall) && (
                <ButtonWrapper>
                    <Button width={300} onClick={changeMode}>Создать игру</Button>
                </ButtonWrapper>
            )
        }
        { !loading
            ? (
                <>
                    { edittedBurime
                        ? <BurimeEdit 
                            burime={edittedBurime}
                            onSave={onSave}
                            onCancel={changeMode}></BurimeEdit>
                        : <BurimeCallList
                            haveCall={haveCall}
                            onAccept={onAccept}
                            onReject={onReject}
                            burimes={burimes}></BurimeCallList>
                    }
                </>
            )
            : <Spinner/>
        }
    </>
}