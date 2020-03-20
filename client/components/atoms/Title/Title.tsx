import React, { ReactNode } from 'react';
import { TitleWrapper, RedTitleWrapper } from './styled';
import { Size } from '../../../constants/enums';

interface TitleProps {
    size?: Size;
    children: ReactNode;
}

export const Title = ({ children, size = Size.md }: TitleProps) => 
    <TitleWrapper size={size}>{children}</TitleWrapper>

interface RedTitleProps {
    children: ReactNode;
}

export const RedTitle = ({ children }: RedTitleProps) => 
    <RedTitleWrapper>{children}</RedTitleWrapper>