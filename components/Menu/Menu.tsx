import React, { useState } from 'react';
import Link from 'next/link';

import { MenuList, MenuItem, MenuLink } from './styled';

interface MenuProps {
    items: any[];
    className?: string;
}

export const Menu = ({ items }: MenuProps) => {
    const [activeMenu, setActiveMenu] = useState(items[0]);
    return (
        <MenuList>
            { items.map((item, i) => (
            <MenuItem key={i} onClick={() => setActiveMenu(item)}>
                <MenuLink active={item === activeMenu}>
                    <Link href={item.href}>{item.text}</Link>
                </MenuLink>
            </MenuItem>
            ))}
        </MenuList>
    )};
