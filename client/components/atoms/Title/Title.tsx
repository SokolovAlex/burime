import React, { ReactNode } from 'react';
import { TitleWrapper } from './styled';
import { Size } from '../../../constants/enums';

interface TitleProps {
    size?: Size;
    children: ReactNode;
}

export const Title = ({ children, size = Size.md }: TitleProps) => 
    <TitleWrapper size={size}>{children}</TitleWrapper>
