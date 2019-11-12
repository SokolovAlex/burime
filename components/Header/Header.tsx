import React from 'react';

import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { HeaderHost } from './styled';

const menuItems = [{
        text: 'играть',
        href: '/play',
        active: true,
    }, {
        text: 'лучшие',
        href: '/top'
    }, {
        text: 'мои заметки',
        href: '/drafts'
    },
];

export const Header = () => (
    <HeaderHost>
        <div>
            <Logo/>
        </div>
        <div>
            <Menu items={menuItems}/>
        </div>
    </HeaderHost>
);