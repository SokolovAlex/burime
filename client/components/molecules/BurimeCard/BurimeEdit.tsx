import React, { useMemo, useState, useCallback, ChangeEvent } from 'react';
import {
    BurimeEditHost,
    FlexRow,
    SelectWrapper,
    BurimeEditBody,
    BurimeEditFooter,
} from './styled';
import {
    BurimeModel,
    IOption,
    BurimeStepsAmountOptions,
    StepDurationOptions,
} from '../../../models/burime';
import { Title } from '../../atoms/Title/Title';
import { useUser } from '../../../services/contexts/auth';
import Select from 'react-select';
import { UserModel } from '../../../models/user';
import { Input, InputRow, InputLabel } from '../../atoms/Input/Input';
import { Size, ButtonType } from '../../../constants/enums';
import { Button } from '../../atoms/Button/Button';

interface BurimeEditProps {
    burime: BurimeModel;
    onSave?: (burime: BurimeModel) => void;
    onCancel?: () => void;
}

export const BurimeEdit = ({ burime, onSave, onCancel }: BurimeEditProps) => {
    const user = useUser();
    const isNew = useMemo(() => !burime.id, []);
    const [selectedSteps, setSelectedSteps] = useState<IOption>(
        BurimeStepsAmountOptions[1]
    );
    const [selectedDuration, setSelectedDuration] = useState<IOption>(
        StepDurationOptions[1]
    );
    const [theme, setTheme] = useState(burime.theme);

    const onStepChange = useCallback(option => setSelectedSteps(option), []);
    const onDurationChange = useCallback(
        option => setSelectedDuration(option),
        []
    );
    const onThemeChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setTheme(e.currentTarget.value),
        []
    );

    const onBurimeSave = useCallback(() => {
        if (onSave && burime) {
            burime.stepDuration = selectedDuration.value;
            burime.stepsAmount = selectedSteps.value;
            burime.theme = theme;
            burime.user1 = user as UserModel;
            onSave(burime);
        }
    }, [burime, theme, selectedSteps, selectedDuration]);

    return (
        <BurimeEditHost>
            <BurimeEditBody>
                <Title size={Size.sm}>
                    {isNew ? 'Создать буриме' : 'Редактировать буриме'}
                </Title>
                <InputRow>
                    <InputLabel>Заголовок</InputLabel>
                    <Input
                        onChange={onThemeChange}
                        value={theme}
                        placeholder="введите заголовок"
                    ></Input>
                </InputRow>

                <FlexRow withMargin>
                    <SelectWrapper margin>
                        <InputLabel>Продолжительность</InputLabel>
                        <Select
                            isSearchable={false}
                            value={selectedSteps}
                            onChange={onStepChange}
                            options={BurimeStepsAmountOptions}
                        />
                    </SelectWrapper>
                    <SelectWrapper>
                        <InputLabel>Время на строку</InputLabel>
                        <Select
                            isSearchable={false}
                            value={selectedDuration}
                            onChange={onDurationChange}
                            options={StepDurationOptions}
                        />
                    </SelectWrapper>
                </FlexRow>
                <div>
                    <span>Автор: </span>
                    <i>{user && user.name}</i>
                </div>
            </BurimeEditBody>
            <BurimeEditFooter>
                <Button
                    type={ButtonType.white}
                    onClick={() => onCancel && onCancel()}
                >
                    Отмена
                </Button>
                <Button type={ButtonType.white} onClick={() => onBurimeSave()}>
                    {isNew ? 'Создать' : 'Сохранить'}
                </Button>
            </BurimeEditFooter>
        </BurimeEditHost>
    );
};
