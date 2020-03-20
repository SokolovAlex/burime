import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { UserModel } from '../../../models/user';
import { BurimeModel, BurimeStep, StepDuration } from '../../../models/burime';
import { RedTitle } from '../../atoms/Title/Title';
import {
    GameContainer,
    CurrentStep,
    StepsWrapper,
    HiddenRow,
    GameDetails,
    GameProgress,
    GameResult,
    StepTime,
} from './styled';
import { BurimeName } from '../../atoms/styled';
import { MyStepEnter } from './MyStepEnter/MyStepEnter';
import { useSocket } from '../../../services/socket';
import {
    newStep,
    createStep,
    finishBurime,
} from '../../../constants/socketEvents';
import { Book } from '@styled-icons/octicons/Book';
import { Timer } from '@styled-icons/material/Timer';
import {
    useCheckFinishedBurime,
    goToBurime,
} from '../../../services/api/burime';
import { Author } from '../../atoms/Author/Author';
import { BurimeTitle } from '../../atoms/styled';

interface BurimeGameProps {
    user: UserModel;
    burime: BurimeModel;
}

const createActiveStep = (burime, burimeSteps, user, opponent) => {
    const step = new BurimeStep();
    step.order = burimeSteps.length + 1;
    step.burime = burime;
    const lastStep = burimeSteps[burimeSteps.length - 1];
    if (lastStep) {
        step.user = lastStep.user.email === user.email ? opponent : user;
    } else {
        step.user = burime.user1;
    }
    return step;
};

const BurimeGame = ({ burime, user }: BurimeGameProps) => {
    const {
        theme,
        name,
        user1,
        user2,
        stepDuration,
        stepsAmount,
        id,
        steps = [],
    } = burime;
    const opponent = useMemo(
        () => (user1.email === user.email ? user2 : user1),
        []
    );
    const socket = useSocket();
    const [burimeSteps, setBurimeSteps] = useState<BurimeStep[]>(steps);
    const [activeStep, setActiveStep] = useState(
        createActiveStep(burime, burimeSteps, user, opponent)
    );
    useCheckFinishedBurime(id);

    useEffect(() => {
        const onNewStep = step => {
            const newSteps = [...burimeSteps, step];
            setBurimeSteps(newSteps);
            const newActiveStep = createActiveStep(
                burime,
                newSteps,
                user,
                opponent
            );
            setActiveStep(newActiveStep);
        };
        const onFinish = () => goToBurime(id);
        socket.on(newStep, onNewStep);
        socket.on(finishBurime, onFinish);
        return () => {
            socket.off(newStep, onNewStep);
            socket.off(finishBurime, onFinish);
        };
    }, [burimeSteps]);

    const onStepConfirm = useCallback(
        step => socket.emit(createStep, step),
        []
    );

    return (
        <>
            <BurimeName>{name}</BurimeName>
            <BurimeTitle center>{theme}</BurimeTitle>
            <GameContainer>
                <CurrentStep>
                    {activeStep.user.email === user.email ? (
                        <MyStepEnter
                            step={activeStep}
                            onConfirm={onStepConfirm}
                        ></MyStepEnter>
                    ) : (
                        <RedTitle>Ждем, что напишет {opponent.name}</RedTitle>
                    )}
                </CurrentStep>
                <StepsWrapper>
                    <GameDetails>
                        <GameProgress>
                            <Book size={32} />
                            <div>
                                {burimeSteps.length * 2}/{stepsAmount * 2}
                            </div>
                        </GameProgress>
                        <StepTime>
                            <Timer size={32}></Timer>
                            <div>
                                {stepDuration !== StepDuration.None ? '-' : 0}
                            </div>
                        </StepTime>
                    </GameDetails>
                    <GameResult>
                        {burimeSteps.map((step, i) => (
                            <React.Fragment key={i}>
                                <Author
                                    isMine={step.user.email === user.email}
                                    name={step.user.name}
                                />
                                <HiddenRow />
                                {i !== burimeSteps.length - 1 ? (
                                    <HiddenRow />
                                ) : (
                                    <div>{step.row2}</div>
                                )}
                            </React.Fragment>
                        ))}
                    </GameResult>
                </StepsWrapper>
            </GameContainer>
        </>
    );
};

export default BurimeGame;
