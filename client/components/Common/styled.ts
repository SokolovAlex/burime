import styled, { css } from 'styled-components'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'

export const ChevronIcon = styled(ChevronDown)<{ open: boolean }>`
    transition: transform 0.3s ease-in-out;
    width: 16px;
    ${props =>
        props.open &&
        css`
            transform: rotate(180deg);
        `}
`
