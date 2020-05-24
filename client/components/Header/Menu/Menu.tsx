import React, { useState } from 'react';
import Link from 'next/link';
import { MenuList, MenuItem, MenuLink } from './styled';
import { AuthModal } from '../../AuthModal/AuthModal';
import { useUser } from '../../../services/contexts/auth';
import { Avatar } from '../Avatar/Avatar';

interface MenuProps {
    items: any[]
    className?: string
}

export const Menu = ({ items }: MenuProps) => {
    const user = useUser();
    const [activeMenu, setActiveMenu] = useState(items[0]);
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <MenuList>
                {items.map((item, i) => (
                    <MenuItem key={i} onClick={() => setActiveMenu(item)}>
                        <MenuLink active={item === activeMenu}>
                            <Link href={item.href}>{item.text}</Link>
                        </MenuLink>
                    </MenuItem>
                ))}
                <MenuItem>
                    {user
                        ? <Avatar user={user} />
                        : <MenuLink onClick={() => setOpen(true)}>войти</MenuLink>}
                </MenuItem>
            </MenuList>
            <AuthModal isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}
