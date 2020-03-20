import styled from 'styled-components';
import { colors } from '../../../constants';

export const AuthorLine = styled.div<{isMine?: boolean}>`
    height: 1px;
    background-color: ${props => props.isMine ? colors.primary : colors.secondary };
    line-height: 0;
    position: relative;
    z-index: 0;
    top: -12px;
`;

export const AuthorName = styled.div<{isMine?: boolean}>`
    color: ${props => props.isMine ? colors.primary : colors.secondary };
    z-index: 1;
    position: relative;
    font-size: 16px;
    background-color: white;
    font-style: italic;
    padding: 0 4px;
    margin: 0 20px;
`;

export const AuthorWrapper = styled.div`
    display: inline-block;
`;
