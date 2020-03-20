import styled from 'styled-components'
import { sizes } from '../../../constants'

export const SectionContent = styled.div`
    max-width: ${sizes.siteWidth};
    margin: auto;
`

export const ContainerContent = styled.div<{minHeight?: number}>`
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : 'auto'};
`
