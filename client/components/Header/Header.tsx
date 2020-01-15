import React from 'react'
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'
import { HeaderHost, MenuWrapper, LogoWraepper, HeaderContent } from './styled'

const menuItems = []

export const Header = () => (
    <HeaderHost>
        <HeaderContent>
            <LogoWraepper>
                <Logo />
            </LogoWraepper>
            <MenuWrapper>
                <Menu items={menuItems} />
            </MenuWrapper>
        </HeaderContent>
    </HeaderHost>
)
