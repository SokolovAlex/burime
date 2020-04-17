import React from "react";
import styled from 'styled-components';
import { fonts, colors, breakpoints } from "../../../constants";

const SlideWrapper = styled.div`
    display: flex;
    height: 400px;
    flex-direction: column;

    @media ${breakpoints.mobile} {
        flex-direction: row;
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
    font-size: 30px;
    color: ${colors.primary};
    align-items: center;
    display: flex;

    ${fonts.neucha}
`;

interface SlideProps {
    title?: string;
    text: string;
    img: string;
    right?: boolean;
}

export const Slide = ({ text, img }: SlideProps) => (
    <SlideWrapper>
        <ImageBlock>
            <img src={img}></img>
        </ImageBlock>
        <TextBlock>
            {text}
        </TextBlock>
    </SlideWrapper>
)