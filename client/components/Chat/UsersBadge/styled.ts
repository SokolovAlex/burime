import styled from 'styled-components';
import { colors } from '../../../constants';

export const UsersBadgeHost = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UsersBadgeContent = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 0 8px;
    color: ${colors.primary};
    align-items: center;
`;

export const UsersBadgeAmount = styled.div`
    height: 12px;
    font-size: 16px;
    padding-left: 4px;
`;