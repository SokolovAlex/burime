import styled from 'styled-components';
import { shadow, colors } from '../../../constants';

export const LandingItem = styled.div`
    text-align: center;
    padding: 12px 0;
`;

export const LandingWrapper = styled.div`
    padding: 0 12px;
`;

export const LandingPoint = styled.div`
    padding: 0 12px;
`;

export const LandingPromo = styled.div`
    background-color: #ececec;
    padding: 24px;
    margin: 24px 0;
    ${shadow.simple}
`;

export const LandingBlocks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LandingBlock = styled.div`
    margin-bottom: 12px;
    :before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: ${ colors.primary };
        margin-right: 12px;
    }
`;


