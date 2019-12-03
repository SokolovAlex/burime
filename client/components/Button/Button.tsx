import React, { ReactNode } from 'react';
import { ButtonWrapper } from './styled';

interface IButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => 
    <button onClick={onClick}>{children}</button>

interface ISubmitButton {
    children: ReactNode;
}

export const SubmitButton = ({ children }: ISubmitButton) => 
    <ButtonWrapper type='submit'>{children}</ButtonWrapper>
