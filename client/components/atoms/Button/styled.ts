import styled, { css } from 'styled-components';
import { colors } from '../../../constants';

export enum ButtonType {
    primary,
    white,
    danger,
}

const rootPreset = {
    [ButtonType.primary]: css`
        background: transparent;
        color: ${colors.primary};
        border: 2px solid ${colors.primary};
        &:hover {
            background-color: ${colors.primary};
            color: white;
        }
    `,
    [ButtonType.white]: css`
        background: white;
        color: ${colors.primary};
        border: 2px solid ${colors.primary};
        &:hover {
            border-color: #0a4b61;
            color: #0a4b61;
        }
    `,
    [ButtonType.danger]:  css`
        background: ${colors.danger};
        color: white;
        border: none;
        &:hover {
            background-color: red;
            color: white;
        }
    `,
}

const sizePreset = {
    sm: css`
        font-size: 16px;
        padding: 8px 16px;
    `,
    md: css`
        font-size: 20px;
        padding: 12px 24px;
    `,
}

export const ButtonHost = styled.button<{
    width?: number;
    size?: string;
    buttonType: ButtonType;
}>`
    cursor: pointer;
    border-radius: 3px;
    transition: 0.5s all ease-out;
    font-family: 'Nunito', sans-serif;

    ${({buttonType}) => rootPreset[buttonType]}

    ${({size}) => sizePreset[size || 'md']}

    ${props =>
        props.width &&
        css`
            width: ${props.width}px;
        `
    }
`;
