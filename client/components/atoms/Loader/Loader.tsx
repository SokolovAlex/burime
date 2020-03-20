import React from 'react'
import { LoaderWrapper } from './styled';
import { SemipolarSpinner } from 'react-epic-spinners';
import { colors } from '../../../constants';

interface LoaderProps {
    wide?: boolean;
}

export const Loader = ({ wide }: LoaderProps) => <LoaderWrapper wide={wide}>
    <SemipolarSpinner color={colors.primary}></SemipolarSpinner>
</LoaderWrapper>