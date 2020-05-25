import styled from 'styled-components'
import { sizes } from '../../../constants'

export const Section = styled.div`
    max-width: ${sizes.siteWidth};
    margin: auto;
`;

export const SectionWrapper = styled.div`
    background-color: #ececec;
    padding: 12px 0;
    margin: 12px 0;
`

export const ContainerContent = styled.div<{minHeight?: number}>`
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : 'auto'};
`;
