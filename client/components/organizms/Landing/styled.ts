import styled from 'styled-components';
import { shadow, colors, fonts, breakpoints } from '../../../constants';

export const LandingItem = styled.div`
    text-align: center;
    padding: 12px 0;
`;

export const LandingPoint = styled.div`
    padding: 0 12px;
`;

export const LandingPromo = styled.div`
    background-color: #ececec;
    padding: 24px;
    margin: 24px 0;
    ${shadow.simple}
`;

export const LandingBlocks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LandingBlock = styled.div`
    margin-bottom: 12px;
    :before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: ${ colors.primary };
        margin-right: 12px;
    }
`;

export const PromoWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-template-columns: 1fr;
    grid-gap: 2vw;
    margin: 20px 0;

    @media ${breakpoints.mobile} {
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

    @media ${breakpoints.laptop} {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const PromoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background-color: #f7f7f7;
    border: solid 1px #bfbaba;
    ${shadow.simple}
    padding: 24px 0;
`;

export const PromoImg = styled.img`
    height: 200px;
    border-radius: 10px;
    border: solid 1px #bfbaba;
    padding: 4px;
`;

export const PromoTitle = styled.div`
    font-size: 32px;
    text-decoration: underline;
    margin: 4px 0;
    color: ${colors.primary};
    ${fonts.neucha}
`;
