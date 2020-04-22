import React, { ReactNode, ChangeEvent, forwardRef, RefObject } from 'react';
import { InputHost, InputRowHost, InputLabelHost, InputInlineLabel, InputHelp, InputValue } from './styled';

interface InputProps {
    placeholder: string;
    name?: string;
    onChange?: (e: ChangeEvent<any>) => void;
    value?: any;
}

export const Input = (props: InputProps) => <InputHost {...props}></InputHost>;

export const InputRef = forwardRef((props: InputProps, ref) => (
    <InputHost {...props} ref={ref as RefObject<any>}></InputHost>
));

interface InputRowProps {
    children: ReactNode;
    margin?: number;
}

export const InputRow = ({ children, margin }: InputRowProps) => (
    <InputRowHost margin={margin}>{children}</InputRowHost>
);

interface InputLabelProps {
    children: ReactNode;
    inline?: boolean;
}

export const InputLabel = ({ children, inline }: InputLabelProps) => {
    return inline ? (
        <InputInlineLabel>{children}</InputInlineLabel>
    ) : (
        <InputLabelHost>{children}</InputLabelHost>
    );
};

export { InputHelp, InputValue };
