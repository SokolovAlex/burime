import React, { ReactNode } from 'react'
import { SectionContent, ContainerContent } from './styled'

interface SectionProps {
    children: ReactNode
    minHeight?: number;
}

export const Section = ({ children }: SectionProps) => (
    <SectionContent>{children}</SectionContent>
)

interface ContainerProps {
    children: ReactNode
    minHeight?: number;
}

export const Container = ({ children, minHeight }: ContainerProps) => (
    <ContainerContent minHeight={minHeight}>{children}</ContainerContent>
)