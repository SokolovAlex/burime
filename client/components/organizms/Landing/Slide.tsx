import React from "react";
import styled from 'styled-components';
import { fonts, colors, breakpoints } from "../../../constants";

const SlideWrapper = styled.div<{ right?: boolean }>`
    display: flex;
    height: 400px;
    flex-direction: column;

    @media ${breakpoints.mobile} {
        flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    }
`;

const SlideBlock = styled.div`
    height: 50%;
    margin: 10px;
    @media ${breakpoints.mobile} {
        width: 50%;
        height: auto;
    }
`;

const ImageBlock = styled(SlideBlock)`
    padding: 10px;
    border: solid 1px silver;
    & img {
        width: 100%;
        height: 100%;
    }
`;

const TextBlock = styled(SlideBlock)`
    padding: 30px;
    font-size: 20px;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    ${fonts.nunito}
`;

const SliderTitle = styled.div`
    font-size: 36px;
    color: ${colors.primary};
    ${fonts.neucha}
`;

interface SlideProps {
    title?: string;
    text: string;
    img: string;
    right?: boolean;
}

export const Slide = ({ title, right, text, img }: SlideProps) => (
    <SlideWrapper right={right}>
        <ImageBlock>
            <img src={img}></img>
        </ImageBlock>
        <TextBlock>
            <SliderTitle>{title}</SliderTitle>
            <div>{text}</div>
        </TextBlock>
    </SlideWrapper>
)