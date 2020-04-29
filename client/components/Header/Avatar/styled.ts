import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../constants'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const AvatarHost = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const AvatarName = styled.div`
    padding: 0 24px;
    display: none;
    @media ${breakpoints.mobile} {
        display: block;
    }
`

export const AvatarMenuWrapper = styled.div<{ open: boolean }>`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    display: ${props => (props.open ? 'block' : 'none')};
    animation: ${fadeIn} 0.3s linear;
    margin-top: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const AvatarMenuItem = styled.a`
    display: flex;
    padding: 8px 12px;
    background-color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-color: ${colors.lightPrimary};
    }
`

export const AvatarMenuText = styled.div`
    margin-left: 8px;
    font-size: 16px;
    text-align: left;
`
