import React, { useCallback, useState } from 'react';
import { useUserContext } from '../../../services/contexts/auth';
import { Input, InputRow, InputLabel } from '../../atoms/Input/Input';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Size } from '../../../constants/enums';
import { changeName } from '../../../services/api/user';
import { success } from '../../../services/toast';

export const UserSettings = () => {
    const { user, setUser } = useUserContext();
    if (!user) return null;
    const [userName, setUserName] = useState(user.name);
    const onSave = useCallback(() =>
        changeName(userName)
            .then(({ message }) => {
                success('Успешно', message);
                setUser({...user, name: userName });
            }
            ),
        [userName]);

    return <>
        <Title size={Size.lg}>Настройки</Title>
        <InputRow>
            <InputLabel inline>Email:</InputLabel>
            <span>{user.email}</span>
        </InputRow>
        <InputRow margin={30}>
            <InputLabel inline>Псевдоним:</InputLabel>
            <Input placeholder='Введите своё имя'
                onChange={(e) => {setUserName(e.target.value)}}
                value={userName}/>
        </InputRow>
        <Button onClick={onSave}>Сохранить</Button>
    </>;
};
