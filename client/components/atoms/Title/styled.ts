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
        || '8px'}
`;
