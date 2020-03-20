import styled, { css } from 'styled-components';
import { colors } from '../../constants';

export const BurimeTitle = styled.div<{center?: boolean}>`
    font-family: 'Fredericka the Great',cursive;
    text-decoration: underline;
    font-size: 32px;
    padding-bottom: 8px;
    color: ${colors.primary};
    ${ props => props.center && css`
        text-align: center;
    `}
`;

export const BurimeName = styled.div`
    font-size: 16px;
    text-align: right;
    margin-bottom: 8px;
`;