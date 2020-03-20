import React, { ChangeEvent, forwardRef, RefObject } from 'react';
import { TextAreaHost } from './styled';

interface TextAreaProps {
    placeholder: string;
    name?: string;
    onChange?: (e: ChangeEvent<any>) => void;
    value?: any;
    disabled?: boolean;
}

export const TextArea = forwardRef((props: TextAreaProps, ref) => 
    <TextAreaHost {...props} ref={ref as RefObject<any>}></TextAreaHost>,)
