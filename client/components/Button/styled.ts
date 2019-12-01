import styled from 'styled-components';
import { colors } from '../../constants';

export const ButtonWrapper = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: ${colors.primary};
        color: white;
    }
`;
