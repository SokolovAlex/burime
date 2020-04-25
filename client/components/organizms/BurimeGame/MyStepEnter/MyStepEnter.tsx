import React, { useState, useCallback, useMemo } from 'react';
import useForm from 'react-hook-form';
import { StepActions } from './styled';
import { BurimeStep } from '../../../../models/burime';
import { SubmitButton, Button } from '../../../atoms/Button/Button';
import { InputRow } from '../../../atoms/Input/Input';
import { TextArea } from '../../../atoms/TextArea/TextArea';
import { RedTitle } from '../../../atoms/Title/Title';

interface MyStepEnterProps {
    onConfirm: (BurimeStep) => void;
    step: BurimeStep;
}

export const MyStepEnter = ({ step, onConfirm }: MyStepEnterProps) => {
    const { register, handleSubmit } = useForm();
    const [isFirstRow, setIsFirstRow] = useState(true);
    const onRowConfirm = useCallback(formData => {
        if (isFirstRow) {
            setIsFirstRow(false);
            return;
        }
        step.row1 = formData.row1;
        step.row2 = formData.row2;
        onConfirm(step);
    }, [isFirstRow, step]);

    const onBack = useCallback(() => setIsFirstRow(true), []);

    return (
        <form onSubmit={handleSubmit(onRowConfirm)} key="signIn">
            <RedTitle>
                Ваш ход
            </RedTitle>
            <InputRow>
                <TextArea disabled={!isFirstRow} ref={register({ required: true })} name="row1" placeholder='Первая строка'></TextArea>
            </InputRow>
            <InputRow>
                <TextArea disabled={isFirstRow} ref={register} name="row2" placeholder='Вторая строка'></TextArea>
            </InputRow>
            <StepActions>
                <SubmitButton>{ isFirstRow ? 'Дальше...' : 'Готово!'}</SubmitButton>
                { !isFirstRow && <Button onClick={onBack}>Первая строка</Button>}
            </StepActions>
        </form>
    )
}