import React, { useState } from 'react';
import { BurimeModel, StepDuration } from '../../../models/burime';
import { Title } from '../../atoms/Title/Title';
import {
    GameDetails,
    GameProgress,
    GameResult,
    StepTime,
    SwitchLabel,
    BurimeStepRow,
    SwitchWrapper,
    BurimeWrapper,
    BurimeDate,
} from './styled';
import Switch from 'react-switch';
import dayjs from 'dayjs';
import { Book } from '@styled-icons/octicons/Book';
import { Timer } from '@styled-icons/material/Timer';
import { Author } from '../../atoms/Author/Author';
import { colors } from '../../../constants';
import { BurimeTitle } from '../../atoms/styled';
import { BurimeName } from '../../atoms/styled';

interface FinishedBurimeProps {
    burime: BurimeModel;
}

const FinishedBurime = ({ burime }: FinishedBurimeProps) => {
    const [showAuthors, setShowAuthors] = useState(false);
    const {
        theme,
        name,
        user1,
        stepDuration,
        stepsAmount,
        createdAt,
        steps = [],
    } = burime;
    return (
        <>
            {name && <BurimeName>#{name}</BurimeName>}
            <GameResult>
                <GameDetails>
                    <GameProgress>
                        <Book size={32} />
                        <div>
                            {steps.length * 2}/{stepsAmount * 2}
                        </div>
                    </GameProgress>
                    <StepTime>
                        <Timer size={32}></Timer>
                        <div>
                            {stepDuration !== StepDuration.None ? '-' : 0}
                        </div>
                    </StepTime>
                    <SwitchWrapper>
                        <SwitchLabel>авторы:</SwitchLabel>
                        <Switch
                            onColor={colors.primary}
                            onChange={checked => setShowAuthors(checked)}
                            checked={showAuthors}
                        />
                    </SwitchWrapper>
                </GameDetails>

                <BurimeWrapper>
                    <BurimeTitle>{theme}</BurimeTitle>
                    {steps.map((step, i) => (
                        <BurimeStepRow key={i}>
                            {showAuthors && (
                                <Author
                                    isMine={user1.email === step.user.email}
                                    name={step.user.name}
                                />
                            )}
                            <div>{step.row1}</div>
                            <div>{step.row2}</div>
                        </BurimeStepRow>
                    ))}
                    <BurimeDate>{ dayjs(createdAt).format('DD/MM/YYYY') }</BurimeDate>
                </BurimeWrapper>
            </GameResult>
        </>
    );
};

export default FinishedBurime;
