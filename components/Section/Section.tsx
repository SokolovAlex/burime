import React, { ReactNode } from 'react';

import { SectionContent } from './styled';

interface SectionProps {
    children: ReactNode;
}

export const Section = ({ children }: SectionProps) => (
    <SectionContent>
        {children}
    </SectionContent>
);
