import styled from 'styled-components';
import { breakpoints } from '../../../constants';

export const StepsWrapper = styled.div`
    flex: 1 0 50%;
    padding: 16px 32px;
`;

export const VisibleRow = styled.div`
    width: 100%;
    font-style: italic;
`;

export const GameDetails = styled.div`
    display: flex;
    font-size: 32px;
    font-family: 'Neucha', cursive;
    margin-bottom: 16px;
    width: 100%;
`;

export const GameProgress = styled.div`
    flex: 1 1 50%;
    display: flex;
    & > div {
        margin-left: 16px;
    }
`;

export const StepTime = styled.div`
    flex: 1 1 50%;
    display: flex;
    & > div {
        margin-left: 16px;
    }
`;

export const GameResult = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;

    @media ${breakpoints.mobile} {
        width: 50%;
    }
`;

export const HiddenRow = styled.div`
    height: 20px;
    width: 100%;
    transform: skew(-20deg, 0);
    background-color: silver;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    margin-bottom: 8px;
`;

export const SwitchLabel = styled.div`
    padding-right: 8px;
    font-size: 20px;
`;

export const BurimeStepRow = styled.div`
    padding-bottom: 16px;
`;

export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BurimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    width: 350px;
    margin: auto;
`;

export const BurimeDate = styled.div`
    font-style: italic;
    font-size: 16px;
    padding-bottom: 12px;
`;
