import styled from 'styled-components'
import { sizes } from '../../constants'

export const HeaderHost = styled.div`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 24px;
`

export const HeaderContent = styled.div`
    max-width: ${sizes.siteWidth};
    margin: auto;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    justify-content: center;
`

export const MenuWrapper = styled.div`
    position: absolute;
    right: 50px;
`

export const LogoWraepper = styled.div``
