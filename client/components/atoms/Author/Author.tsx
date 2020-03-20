import React from 'react';
import { AuthorName, AuthorLine, AuthorWrapper } from './styled';

interface AuthorProps {
    name: string | undefined;
    isMine: boolean;
}

export const Author = ({ name, isMine }: AuthorProps) => (
    <AuthorWrapper>
        <AuthorName isMine={isMine}>
            {name}
        </AuthorName>
        <AuthorLine isMine={isMine}></AuthorLine>
    </AuthorWrapper>
)
