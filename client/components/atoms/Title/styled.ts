import { Size } from './../../../constants/enums';
import styled from 'styled-components';
import { colors } from '../../../constants';

export const TitleWrapper = styled.h2<{ size: Size }>`
    font-size: 32px;
    color: ${colors.primary};
    text-align: center;
    margin-top: 0;
    margin-bottom: ${props =>
        (props.size === Size.lg && '24px')
        || (props.size === Size.md && '12px')
        || '8px'};
`;

export const RedTitleWrapper = styled.div`
    font-size: 32px;
    color: ${colors.danger};
    font-family: 'Neucha', cursive;
    text-align: center;
    margin-bottom: 16px;
`;
