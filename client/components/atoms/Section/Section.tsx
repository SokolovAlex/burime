import React, { ReactNode } from 'react'
import { Section, ContainerContent, SectionWrapper } from './styled'

interface ContainerProps {
    children: ReactNode
    minHeight?: number;
}

export const Container = ({ children, minHeight }: ContainerProps) => (
    <ContainerContent minHeight={minHeight}>{children}</ContainerContent>
);

interface BackgroundProps {
    children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => (
    <SectionWrapper>
        <Section>{children}</Section>
    </SectionWrapper>
);

export { Section };