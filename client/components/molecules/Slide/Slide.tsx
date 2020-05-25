import React from "react";
import { SlideWrapper, ImageBlock, TextBlock, SliderTitle, RuleNumber } from './styled';

interface SlideProps {
    title?: string;
    slideNumber?: number;
    text: string;
    img: string;
    right?: boolean;
}

export const Slide = ({ title, right, slideNumber, text, img }: SlideProps) => (
    <SlideWrapper right={right}>
        <ImageBlock>
            <img src={img}></img>
        </ImageBlock>
        <TextBlock>
            { slideNumber && <RuleNumber>{slideNumber}</RuleNumber>}
            { title && <SliderTitle>{title}</SliderTitle>}
            <div>{text}</div>
        </TextBlock>
    </SlideWrapper>
)