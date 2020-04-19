import styled from 'styled-components';
import { shadow, colors, breakpoints, fonts } from '../../../constants';

export const LandingItem = styled.div`
    text-align: center;
    padding: 12px 0;
`;

export const LandingWrapper = styled.div`
    padding: 0 12px;
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

export const LandingRules = styled.div`
    margin-bottom: 12px;
`;

export const SlideWrapper = styled.div<{ right?: boolean }>`
    display: flex;
    height: 400px;
    flex-direction: column;

    @media ${breakpoints.mobile} {
        flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    }
`;

export const SlideBlock = styled.div`
    height: 50%;
    margin: 10px;
    @media ${breakpoints.mobile} {
        width: 50%;
        height: auto;
    }
`;

export const ImageBlock = styled(SlideBlock)`
    padding: 10px;
    border: solid 1px silver;
    & img {
        width: 100%;
        height: 100%;
    }
`;

export const TextBlock = styled(SlideBlock)<{fontSize?: number}>`
    padding: 30px;
    font-size: ${({fontSize}) => fontSize ? `${fontSize}px` : '32px' };
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    ${fonts.nunito}
`;

export const SliderTitle = styled.div`
    font-size: 52px;
    color: ${colors.primary};
    ${fonts.neucha}
`;


