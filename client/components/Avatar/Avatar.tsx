import React, { useState, useCallback } from 'react';
import { AvatarHost } from './styled';
import { UserModel } from '../interfaces';

interface AvatarProps {
    user: UserModel;
}

export const Avatar = ({ user }: AvatarProps) => {
    const [open, setOpen] = useState();
    const toggleOpen = useCallback(() => setOpen(!open), [open]);
    return (
        <AvatarHost onClick={toggleOpen}/>
    )
};
