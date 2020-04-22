import React, { useCallback, useState } from 'react';
import { useUserContext } from '../../../services/contexts/auth';
import { Input, InputRow, InputLabel, InputHelp, InputValue } from '../../atoms/Input/Input';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Size } from '../../../constants/enums';
import { changeName } from '../../../services/api/user';
import { success, error } from '../../../services/toast';

export const UserSettings = () => {
    const { user, setUser } = useUserContext();
    if (!user) return null;
    const [userName, setUserName] = useState(user.name);
    const onSave = useCallback(() =>
        changeName(userName)
            .then(({ message }) => {
                success('Успешно', message);
                setUser({...user, name: userName });
            })
            .catch(({ message }) => error('Ошибка', message )),
        [userName]);

    const onChangeName = useCallback((e) => {
            if (e.target.value.length <= 15) {
                setUserName(e.target.value);
            }
        }, []);

    return <>
        <Title size={Size.lg}>Настройки</Title>
        <InputRow>
            <InputLabel inline>Email:</InputLabel>
            <InputValue>{user.email}</InputValue>
        </InputRow>
        <InputRow margin={30}>
            <InputLabel inline>Псевдоним:</InputLabel>
            <InputValue>
                <Input placeholder='Введите своё имя'
                    onChange={onChangeName}
                    value={userName}/>
                <InputHelp>Максимальное количесво символов - 15</InputHelp>
            </InputValue>
        </InputRow>
        <Button onClick={onSave}>Сохранить</Button>
    </>;
};
