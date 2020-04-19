import React, { Children, ReactNode, useMemo, useEffect, useState, useCallback } from "react";
import { SliderList, SliderTrack, SliderWrapper, CardWrapper, LeftArrow, RightArrow, Dot, DotsWrapper } from './styled';
import { Timer } from "./Timer";

interface IMySliderSettings {
    children: ReactNode,
    autoSlide: number,
}

export const MySlider = ({ children, autoSlide }: IMySliderSettings) => {
    const childWidth = 100;
    const numberOfChildren = useMemo(() => Children.count(children), []);
    const [activeCard, setActiveCard] = useState(0);
    const [autoSlider, setAutoSlider] = useState<Timer>();

    useEffect(() => {
        const timer = new Timer(goRight, autoSlide);
        setAutoSlider(timer);
        timer.start();
        return () => {
            timer.stop();
        }
    }, [activeCard]);

    const goLeft = useCallback((event) => {
        if (event && event.preventDefault) event.preventDefault();
        const nextInitialCard = activeCard < 1 ? numberOfChildren - 1 : activeCard - 1;
        setActiveCard(nextInitialCard);
    }, [activeCard]);

    const goRight = useCallback(() => {
        if (event && event.preventDefault) event.preventDefault();
        const nextInitialCard = activeCard >= numberOfChildren - 1 ? 0 : activeCard + 1;
        setActiveCard(nextInitialCard);
    }, [activeCard]);

    const renderChildren = (children) => (
        Children.map(children, (child, index) => (
            <CardWrapper key={index} width={childWidth}>
                {child}
            </CardWrapper>
        )
    ));

    const renderDots = () => {
        const array = new Array(numberOfChildren);
        return array.map((index) => <Dot key={index} active={index === activeCard} onClick={() => setActiveCard(index)}/>);
    }

    return (
        <div
            onMouseLeave={() => autoSlider && autoSlider.start()}
            onMouseEnter={() => autoSlider && autoSlider.stop()}
        >
            <SliderWrapper>
                <LeftArrow onClick={goLeft}/>
                <SliderTrack>
                    <SliderList translateX={activeCard * childWidth}>
                        { renderChildren(children) }
                    </SliderList>
                </SliderTrack>
                <RightArrow onClick={goRight}/>
            </SliderWrapper>
            <DotsWrapper>{renderDots()}</DotsWrapper>
        </div>
    );
}

