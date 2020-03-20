import styled from 'styled-components'

export const LoaderWrapper = styled.div<{wide?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: ${props => props.wide ? '200px' : 'auto' };
`