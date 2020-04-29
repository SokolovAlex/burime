import React, { ReactNode } from 'react';
import { TitleWrapper, RedTitleWrapper } from './styled';
import { Size } from '../../../constants/enums';

interface TitleProps {
    size?: Size;
    children: ReactNode;
    underline?: boolean;
}

export const Title = ({ children, size = Size.md, underline }: TitleProps) => 
    <TitleWrapper size={size} underline={underline}>{children}</TitleWrapper>

interface RedTitleProps {
    children: ReactNode;
}

export const RedTitle = ({ children }: RedTitleProps) => 
    <RedTitleWrapper>{children}</RedTitleWrapper>