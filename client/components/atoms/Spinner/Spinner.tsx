import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBase = styled.div`
    margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid ${colors.primary};
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Spinner = () => (
    <SpinnerWrapper>
        <SpinnerBase/>
    </SpinnerWrapper>
)