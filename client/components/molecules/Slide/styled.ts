import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../../constants';

export const SlideWrapper = styled.div<{ right?: boolean }>`
    display: flex;
    height: 500px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;

    @media ${breakpoints.mobile} {
        height: 400px;
        flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    }
`;

export const SlideBlock = styled.div`
    height: 50%;
    width: 60%;
    margin: 10px;
    @media ${breakpoints.mobile} {
        width: 50%;
        height: 100%;
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

export const RuleNumber = styled.div`
    border-radius: 50%;
    font-size: 44px;
    width: 42px;
    height: 42px;
    padding: 8px;
    background: #fff;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const TextBlock = styled(SlideBlock)<{fontSize?: number}>`
    padding: 16px;
    font-size: 20px;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    ${fonts.nunito}
    @media ${breakpoints.mobile} {
        font-size: ${({fontSize}) => fontSize ? `${fontSize}px` : '32px' };
    }
`;

export const SliderTitle = styled.div`
    font-size: 40px;
    color: ${colors.primary};
    ${fonts.neucha}
    @media ${breakpoints.mobile} {
        font-size: 52px;
    }
`;
