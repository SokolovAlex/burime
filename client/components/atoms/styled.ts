import styled, { css } from 'styled-components';
import { colors } from '../../constants';
import { OpenBook } from '@styled-icons/entypo/OpenBook';
import { Heart2 } from '@styled-icons/remix-line/Heart2';
import { Heart } from '@styled-icons/zondicons/Heart';

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

export const ActionsBlock = styled.div`
    display: flex;
`;

export const Action = styled.div`
    padding-left: 8px;
    color: ${colors.primary};
`;

const cursorIcon = css`
    cursor: pointer;
    color: ${colors.primary};
`;

export const OpenStyled = styled(OpenBook)`
    ${cursorIcon}
`;

export const HeartEmpty = styled(Heart2)`
    ${cursorIcon}
`;

export const HeartFilled = styled(Heart)`
    ${cursorIcon}
`;