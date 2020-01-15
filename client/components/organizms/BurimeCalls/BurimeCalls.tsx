import React, { useState, useCallback, useEffect } from "react";
import { useSocket } from "../../../services/socket";
import { useUser } from "../../../services/contexts/auth";
import { ButtonWrapper } from './styled';
import { Title } from "../../atoms/Title/Title";
import { Button } from "../../Button/Button";
import { getCalls, goToBurime, useActiveBurime } from "../../../services/api/burime";
import { BurimeEdit } from "../../molecules/BurimeCard/BurimeEdit";
import { BurimeModel } from "../../../models/burime";
import { BurimeList } from "../../molecules/BurimeCard/BurimeList";
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
    const [error, setError] = useState(null);
    const [burimes, setBurimes] = useState<BurimeModel[]>([]);
    useEffect(() => {
        getCalls()
            .then(data => {
                const burimes = data.burimes;
                const hasMine = burimes.some(burime => burime.user1.email === user.email)
                setBurimes(burimes);
                setHaveCall(hasMine);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const onNewBurime = burime => {
            setHaveCall(burime.user1.email === user.email);
            setBurimes([burime, ...burimes]);
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
                goToBurime(burime.id);
            }
        };
        socket.on(newBurime, onNewBurime);
        socket.on(acceptedBurime, removeBurimeById);
        socket.on(deletedBurime, removeBurimeById);
        return () => {
            socket.off(deletedBurime, removeBurimeById);
            socket.off(acceptedBurime, onAcceptBurime);
            socket.off(newBurime, onNewBurime);
        };
    }, [burimes]);

    const [ edittedBurime, setEdittedBurime ] = useState<BurimeModel>();
    const changeMode = useCallback(() =>  setEdittedBurime(edittedBurime ? undefined : new BurimeModel()), [edittedBurime]);
    const onSave = useCallback(burime => { 
        socket.emit(createBurime, burime);
        changeMode();
    }, [changeMode]);
    const onReject = useCallback(burime => socket.emit(deleteBurime, burime), []);
    const onAccept = useCallback(burime => socket.emit(acceptBurime, burime), []);
    const onEdit = useCallback(burime => setEdittedBurime(burime), []);

    return <>
        <Title>Приглашения</Title>
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
                        : <BurimeList
                            haveCall={haveCall}
                            onAccept={onAccept}
                            onEdit={onEdit}
                            onReject={onReject}
                            items={burimes}></BurimeList>
                    }
                </>
            )
            : 'loading...'
        }
    </>
}