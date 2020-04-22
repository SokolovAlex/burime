import styled, { css } from 'styled-components';
import { shadow, colors } from '../../../constants';

export const BurimeEditHost = styled.div`
    border-radius: 4px;
    background-color: ${colors.lightPrimary};
    ${shadow.simple};
`;

export const BurimeEditBody = styled.div`
    padding: 24px 48px;
`;

export const FlexRow = styled.div<{withMargin?: boolean}>`
    display: flex;
    justify-content: space-between;
    ${ props => props.withMargin && css`
        margin-bottom: 24px;
    `}
`;

export const SelectWrapper = styled.div<{margin?: boolean}>`
    flex: 1 1 auto;
    ${props => props.margin && css`
        margin-right: 20px;
    `}
`;

export const BurimeEditFooter = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 24px 48px;
    border-top: solid 1px ${colors.primary};
`;


export const BurimeCard = styled.div`
    background-color: ${colors.lightPrimary};
    margin: 12px auto;
    ${shadow.simple};
    max-width: 800px;
`;

export const BurimeCardFooter = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px 48px;
    border-top: solid 1px ${colors.primary};
`;

export const BurimeCardBody = styled.div`
    padding: 12px 48px;
`;

export const Label = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    text-decoration: underline;
`;

export const BurimeSetting = styled.div`
    display: flex;
`;

export const BurimeSettingText = styled.div`
    margin-left: 8px;
`;

export const ThemeText = styled.div`
    margin-bottom: 8px;
    text-decoration: underline;
    flex: 1 1 auto;
`;

export const BurimeDate = styled.div`
    margin-bottom: 8px;
    font-size: 14px;
    flex: 0 0 auto;
`;

export const BurimeRow = styled.div`
    display: flex;
    align-items: center;
`;

export const EmptyMessage = styled.div`
    text-align: center;
    padding: 20px 0;
`;

export const IconButton = styled.div`
    width: 30px;
    display: inline-block;
    margin-left: 20px;
    color: black;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    :hover {
        color: ${colors.primary};
    }
`;
