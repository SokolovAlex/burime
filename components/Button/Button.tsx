import React, { ReactNode } from 'react';
import { Button as MuiButton } from "@material-ui/core";
import { ButtonWrapper } from './styled';

interface IButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => 
    <MuiButton variant='contained' onClick={onClick} color="primary">{children}</MuiButton>

interface ISubmitButton {
    children: ReactNode;
}

export const SubmitButton = ({ children }: ISubmitButton) => 
    <ButtonWrapper type='submit'>{children}</ButtonWrapper>
