import React, { useState, useCallback } from "react";
import { useUser } from "../../../services/contexts/auth";
import { Title } from "../../atoms/Title/Title";
import { useMyBurimes, useActiveBurime, goToBurime } from "../../../services/api/burime";
import { BurimeList } from "../../molecules/BurimeList/BurimeList";

export const MyBurimeList = () => {
    const user = useUser();
    if (!user) { 
        return null;
    }
    useActiveBurime();
    const { loading, burimes } = useMyBurimes();
    const [] = useState();
    const onOpen = useCallback(burime => goToBurime(burime.id), []);

    return <>
        <Title>Мои буриме</Title>
        { !loading
            ? (
                <BurimeList
                    onOpen={onOpen}
                    burimes={burimes}></BurimeList>
            )
            : 'loading...'
        }
    </>
}