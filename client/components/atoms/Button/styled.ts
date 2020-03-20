import { ButtonType } from './../../../constants/enums';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants';

export const ButtonHost = styled.button<{
    width?: number;
    buttonType: ButtonType;
}>`
    cursor: pointer;
    font-size: 20px;
    border-radius: 3px;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    padding: 12px 24px;
    transition: 0.5s all ease-out;
    font-family: 'Nunito', sans-serif;
    background: ${props =>
        props.buttonType === ButtonType.white ? 'white' : 'transparent'};

    ${props =>
        props.width &&
        css`
            width: ${props.width}px;
        `}

    &:hover {
        background-color: ${colors.primary};
        color: white;
    }
`;
