import { css } from 'styled-components'

export const slideUpCss = css`
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
    transition: opacity 300ms ease-out 100ms, transform 300ms ease-out 100ms;
    &.enter-active {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    &.enter-done {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    &.exit-active {
        opacity: 0;
        transform: scale(0.9) translateY(10px);
    }
    &.exit-done {
        display: none;
    }
`

export const slider = css`
    height: 0;
    transition: height 200ms ease-in;
    &.enter-done {
        height: 500px;
    }
    &.exit-done {
        display: none;
    }
`

export const fade = css`
    opacity: 0;
    display: none;
    transition: opacity 500ms ease-in;
    &.enter {
        display: block;
    }
    &.enter-done {
        display: block;
        opacity: 1;
    }
`


export const fadeOut = css`
    transition: opacity 500ms ease-in;
    opacity: 1;
    &.enter {
        opacity: 0;
    }
    &.enter-done {
        display: none;
    }
`
