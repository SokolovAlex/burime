import { redirect } from 'nextjs-redirect'
import styled, { css } from 'styled-components'

const menuColor = '#bfbaba'
const activeColor = '#498ea5'

export const MenuList = styled.div`
    text-align: right;
    position: relative;
    display: flex;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`

export const MenuItem = styled.div`
    font-size: 20px;
    margin: 1em 0;
    cursor: pointer;
    font-family: 'Neucha', cursive;
    position: relative;
`

export const MenuLink = styled.span<{ active?: boolean }>`
    position: relative;
    margin: 0 1em;
    padding-right: 0;
    padding-left: 0;
    color: ${menuColor};
    text-decoration: none;
    transition: color 0.4s;

    &:before,
    &:after {
        -webkit-transform: scale3d(1, 1, 1);
        content: '';
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 100%;
        height: 4px;
        transform: scale3d(0, 1, 1);
        transform-origin: center left;
        transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:before {
        background: ${menuColor};
        transition-delay: 0.4s;
    }

    &:after {
        background: ${activeColor};
    }

    &:hover {
        color: ${menuColor};

        &::before {
            transform: scale3d(1, 1, 1);
            transition-delay: 0s;
        }
    }

    ${props =>
        props.active &&
        css`
            color: ${activeColor};
            &:hover {
                color: ${activeColor};
            }
            &:before,
            &:after {
                transform: scale3d(1, 1, 1);
            }
            &:before {
                transition-delay: 0s;
            }
        `}
`
