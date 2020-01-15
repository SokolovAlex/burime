import React, { useState, useCallback, useRef } from 'react'
import { UserCircle } from 'styled-icons/fa-solid/UserCircle'
import { LogOut } from 'styled-icons/boxicons-regular/LogOut'
import { Settings } from 'styled-icons/material/Settings'
import { Edit } from 'styled-icons/boxicons-regular/Edit'
import { useClickAway } from 'react-use'
import {
    AvatarHost,
    AvatarMenuWrapper,
    AvatarMenuItem,
    AvatarName,
    AvatarMenuText,
} from './styled'
import { UserModel } from '../../../models/user'
import { signOut } from '../../../services/api/auth'
import { error } from '../../../services/toast'
import { ChevronIcon } from '../../Common/styled'

interface AvatarProps {
    user: UserModel
}

export const Avatar = ({ user }: AvatarProps) => {
    const [open, setOpen] = useState()
    const toggleOpen = useCallback(() => setOpen(!open), [open])
    const ref = useRef(null)

    useClickAway(ref, () => setOpen(false))
    const logOut = useCallback(async () => {
        try {
            const { status, data } = await signOut()
            if (status === 421) {
                error('Ошибка', data.message)
                return
            }
            document.location.reload(true)
        } catch {}
    }, [])

    return (
        <div ref={ref}>
            <AvatarHost onClick={toggleOpen}>
                <UserCircle width={24} />
                <AvatarName>{user.name}</AvatarName>
                <ChevronIcon open={open} />
            </AvatarHost>
            <AvatarMenuWrapper open={open}>
                <AvatarMenuItem>
                    <Edit width={16} />
                    <AvatarMenuText>мои</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem>
                    <Settings width={16} />
                    <AvatarMenuText>настройки</AvatarMenuText>
                </AvatarMenuItem>
                <AvatarMenuItem onClick={logOut}>
                    <LogOut width={16} />
                    <AvatarMenuText>выйти</AvatarMenuText>
                </AvatarMenuItem>
            </AvatarMenuWrapper>
        </div>
    )
}
