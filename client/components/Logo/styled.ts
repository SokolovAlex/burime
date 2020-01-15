import styled from 'styled-components'

const primaryColor = '#498ea5'
const secondaryColor = 'black'
const duration = '1s'

export const LogoWrapper = styled.div`
    font-weight: 400;
    text-transform: uppercase;
    font-size: 46px;
    color: ${primaryColor};
    outline: none;
    text-decoration: none;
    position: relative;
    line-height: 1;
    display: inline-block;

    &::before,
    &::after {
        content: '';
        width: 100%;
        height: 2px;
        z-index: -1;
        background: ${secondaryColor};
        position: absolute;
        transform: scale3d(0, 1, 1);
        transition: transform ${duration};
    }

    &::before {
        right: 0;
        top: 0;
        transform-origin: 100% 50%;
    }

    &::after {
        left: 0;
        bottom: 0;
        transform-origin: 0 50%;
    }

    span {
        font-family: 'Fredericka the Great', cursive;
        font-weight: 400;
        text-transform: uppercase;
        color: ${primaryColor};
        padding: 0.125em 0;
        position: relative;
        transition: color ${duration};
    }

    span::before,
    span::after {
        position: absolute;
        color: ${secondaryColor};
        opacity: 0;
        transition: transform ${duration}, opacity ${duration};
    }

    span::before {
        content: attr(data-letters-l);
        left: 0;
        transform: translate3d(-15px, 0, 0);
    }

    span::after {
        content: attr(data-letters-r);
        right: 0;
        transform: translate3d(15px, 0, 0);
    }

    &:hover {
        color: ${secondaryColor};
        outline: 0;

        &::before,
        &::after {
            transform: scale3d(1, 1, 1);
        }

        span {
            color: transparent;
        }

        span::before,
        span::after {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`
