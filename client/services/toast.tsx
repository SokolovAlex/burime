import React from 'react';
import ButterToast, { Cinnamon } from 'butter-toast';
import { ThumbsUp } from 'styled-icons/feather/ThumbsUp';
import { MoodBad } from 'styled-icons/material/MoodBad';

import styled from 'styled-components'

const ThumbsUpStyled = styled(ThumbsUp)`
    padding: 8px;
`;

const MoodBadStyled = styled(MoodBad)`
    padding: 8px;
    color: red;
`;

export const success = (title: string, text: string) => {
    ButterToast.raise({
        content: <Cinnamon.Crunch
            icon={<ThumbsUpStyled></ThumbsUpStyled>}
            title={title}
            content={text}
            scheme={Cinnamon.Crunch.SCHEME_GREEN}/>
    });
};

export const error = (title: string, text: string) => {
    ButterToast.raise({
        content: <Cinnamon.Crunch
            icon={<MoodBadStyled></MoodBadStyled>}
            title={title}
            content={text}
            scheme={Cinnamon.Crunch.SCHEME_RED}/>
    });
};