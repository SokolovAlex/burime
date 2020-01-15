import React, { ReactNode, ChangeEvent } from 'react';
import { InputHost, InputRowHost, InputLabelHost } from './styled';

interface InputProps {
    placeholder: string;
    onChange?: (e: ChangeEvent<any>) => void;
    value?: any;
}

export const Input = (props: InputProps) => 
    <InputHost {...props}></InputHost>

interface InputRowProps {
    children: ReactNode;
}

export const InputRow = ({ children }: InputRowProps) => 
    <InputRowHost>{children}</InputRowHost>


interface InputLabelProps {
    children: ReactNode;
}

export const InputLabel = ({ children }: InputLabelProps) => 
    <InputLabelHost>{children}</InputLabelHost>
