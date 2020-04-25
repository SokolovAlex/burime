import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    min-height: 400px;
    margin-bottom: 16px;
`;

export const CurrentStep = styled.div`
    flex: 1 1 50%;
    padding: 16px;
`;

export const StepsWrapper = styled.div`
    flex: 1 1 50%;
    border-left: solid 1px silver;
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
    align-items: center;
`;

export const HiddenRow = styled.div`
    height: 20px;
    width: 100%;
    transform: skew(-20deg, 0);
    background-color: silver;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    margin-bottom: 8px;
`;

export const BottomActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    & * {
        margin-right: 12px;
    }
`;

export const WarningMessage = styled.div`
    font-size: 24px;
`;
