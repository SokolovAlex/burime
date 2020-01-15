import React from "react";
import { BurimeCard, FlexRow, BurimeCardBody, ThemeText, BurimeCardFooter, BurimeSetting, BurimeSettingText, BurimeDate, BurimeRow } from './styled';
import { BurimeModel, BurimeStepsAmountOptionsMap, StepDurationOptionsMap } from "../../../models/burime";
import { Button, ButtonType } from "../../Button/Button";
import { Timer } from 'styled-icons/boxicons-regular/Timer';
import { Edit3 } from 'styled-icons/feather/Edit3';
import { User } from 'styled-icons/boxicons-regular/User';

import { useUser } from "../../../services/contexts/auth";
import { format } from "../../../services/date";

interface BurimeListProps {
    items: BurimeModel[];
    haveCall: boolean;
    onAccept: (burime: BurimeModel) => void;
    onReject: (burime: BurimeModel) => void;
    onEdit: (burime: BurimeModel) => void;
}

export const BurimeList = ({ items, haveCall, onAccept, onReject, onEdit }: BurimeListProps) => {
    const user = useUser();
    return <>
        { items.map(burime => (
            <BurimeCard key={burime.id}>
                <BurimeCardBody>
                    <BurimeRow>
                        <ThemeText>{burime.theme}</ThemeText>
                        <BurimeDate>{format(burime.createdAt)}</BurimeDate>
                    </BurimeRow>
                    <FlexRow>
                        <BurimeSetting>
                            <Edit3 width={24}></Edit3>
                            <BurimeSettingText>{BurimeStepsAmountOptionsMap[burime.stepsAmount].label}</BurimeSettingText>
                        </BurimeSetting>
                        <BurimeSetting>
                            <Timer width={24}></Timer>
                            <BurimeSettingText>{StepDurationOptionsMap[burime.stepDuration].label}</BurimeSettingText>
                        </BurimeSetting>
                        <BurimeSetting>
                            <User width={24}></User>
                            <BurimeSettingText>{burime.user1.name}</BurimeSettingText>
                        </BurimeSetting>
                    </FlexRow>
                </BurimeCardBody>
                <BurimeCardFooter>
                    { burime.user1.email === user.email
                        ? (
                            <>
                                <Button type={ButtonType.white} onClick={() => onReject(burime)}>Отменить</Button>
                                <Button type={ButtonType.white} onClick={() => onEdit(burime)}>Редактировать</Button>
                            </>
                            )
                        : (
                            haveCall
                                ? 'вы уже создали буриме'
                                :  <Button type={ButtonType.white} onClick={() => onAccept(burime)}>Принять вызов</Button>
                        )
                    }
                    </BurimeCardFooter>
            </BurimeCard>
        ))
        }
    </>
}