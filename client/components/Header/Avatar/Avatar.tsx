import React, { useState, useCallback, useRef } from 'react';
import { UserCircle } from '@styled-icons/fa-solid/UserCircle';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { Settings } from '@styled-icons/material/Settings';
import { OpenBook } from '@styled-icons/entypo/OpenBook';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Spreadsheet } from '@styled-icons/boxicons-regular/Spreadsheet';
import { PencilRuler } from '@styled-icons/remix-line/PencilRuler';

import { useClickAway } from 'react-use';
import {
    AvatarHost,
    AvatarMenuWrapper,
    AvatarMenuItem,
    AvatarName,
    AvatarMenuText,
} from './styled';
import { UserModel } from '../../../models/user';
import { signOut } from '../../../services/api/auth';
import { error } from '../../../services/toast';
import { ChevronIcon } from '../../Common/styled';

interface AvatarProps {
    user: UserModel
}

export const Avatar = ({ user }: AvatarProps) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback(() => setOpen(!open), [open]);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));
    const logOut = useCallback(async () => {
        try {
            const { status, data } = await signOut()
            if (status !== 200) {
                error('Ошибка', data.message)
                return
            }
            document.location.reload(true)
        } catch {}
    }, []);

    return (
        <div ref={ref}>
            <AvatarHost onClick={toggleOpen}>
                <UserCircle width={24}/>
                <AvatarName>{user.name}</AvatarName>
                <ChevronIcon open={open} />
            </AvatarHost>
            <AvatarMenuWrapper open={open}>
                <AvatarMenuItem href='/calls'>
                    <Edit width={16}/>
                    <AvatarMenuText>вызовы</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem href='/all'>
                    <Spreadsheet width={16}/>
                    <AvatarMenuText>все буриме</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem href='/my'>
                    <OpenBook width={16}/>
                    <AvatarMenuText>мои</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem href='/rules'>
                    <PencilRuler width={16}/>
                    <AvatarMenuText>правила</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem href='/settings'>
                    <Settings width={16}/>
                    <AvatarMenuText>настройки</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem onClick={logOut}>
                    <LogOut width={16}/>
                    <AvatarMenuText>выйти</AvatarMenuText>
                </AvatarMenuItem>
            </AvatarMenuWrapper>
        </div>
    )
}
