import React from 'react';
import {
    BurimeCard,
    FlexRow,
    BurimeCardBody,
    ThemeText,
    BurimeCardFooter,
    BurimeSetting,
    BurimeSettingText,
    BurimeDate,
    BurimeRow,
    EmptyMessage,
} from './styled';
import {
    BurimeModel,
    BurimeStepsAmountOptionsMap,
    StepDurationOptionsMap,
} from '../../../models/burime';
import { Button, ButtonType } from '../../atoms/Button/Button';
import { Timer } from '@styled-icons/boxicons-regular/Timer';
import { Edit3 } from '@styled-icons/feather/Edit3';
import { User } from '@styled-icons/boxicons-regular/User';

import { useUser } from '../../../services/contexts/auth';
import { format } from '../../../services/date';

interface BurimeCallListProps {
    burimes: BurimeModel[];
    haveCall?: boolean;
    viewMode?: boolean;
    onAccept?: (burime: BurimeModel) => void;
    onReject?: (burime: BurimeModel) => void;
    onOpen?: (burime: BurimeModel) => void;
}

export const BurimeCallList = ({
    burimes,
    haveCall,
    viewMode,
    onAccept,
    onReject,
    onOpen,
}: BurimeCallListProps) => {
    const user = useUser();
    return (
        <>
            {burimes.length > 0 ? (
                burimes.map(burime => (
                    <BurimeCard key={burime.id}>
                        <BurimeCardBody>
                            <BurimeRow>
                                <ThemeText>{burime.theme}</ThemeText>
                                <BurimeDate>
                                    {format(burime.createdAt)}
                                </BurimeDate>
                            </BurimeRow>
                            <FlexRow>
                                <BurimeSetting>
                                    <Edit3 width={24}></Edit3>
                                    <BurimeSettingText>
                                        {
                                            BurimeStepsAmountOptionsMap[
                                                burime.stepsAmount
                                            ].label
                                        }
                                    </BurimeSettingText>
                                </BurimeSetting>
                                <BurimeSetting>
                                    <Timer width={24}></Timer>
                                    <BurimeSettingText>
                                        {
                                            StepDurationOptionsMap[
                                                burime.stepDuration
                                            ].label
                                        }
                                    </BurimeSettingText>
                                </BurimeSetting>
                                <BurimeSetting>
                                    <User width={24}></User>
                                    <BurimeSettingText>
                                        {burime.user1.name}
                                    </BurimeSettingText>
                                </BurimeSetting>
                            </FlexRow>
                        </BurimeCardBody>
                        <BurimeCardFooter>
                            {viewMode ? (
                                <Button
                                    type={ButtonType.white}
                                    onClick={() => onOpen && onOpen(burime)}
                                >
                                    Посмотреть
                                </Button>
                            ) : (
                                <>
                                    {burime.user1.email === user.email ? (
                                        <>
                                            <Button
                                                type={ButtonType.white}
                                                onClick={() =>
                                                    onReject && onReject(burime)
                                                }
                                            >
                                                Отменить
                                            </Button>
                                        </>
                                    ) : haveCall ? (
                                        'вы уже создали буриме'
                                    ) : (
                                        <Button
                                            type={ButtonType.white}
                                            onClick={() =>
                                                onAccept && onAccept(burime)
                                            }
                                        >
                                            Принять вызов
                                        </Button>
                                    )}
                                </>
                            )}
                        </BurimeCardFooter>
                    </BurimeCard>
                ))
            ) : (
                <EmptyMessage>Нет игр</EmptyMessage>
            )}
        </>
    );
};
