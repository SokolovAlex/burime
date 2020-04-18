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

    const autoSlider = useMemo(() => {
        return new Timer(() => {
            let updatedInitialCard = 0;
            if (numberOfChildren - 1 > activeCard) {
                updatedInitialCard = activeCard + 1;
            }
            setActiveCard(updatedInitialCard);
        }, autoSlide);
    }, [activeCard])

    useEffect(() => {
        if (autoSlide) {
            autoSlider.start();
        }
        return () => {
            if (autoSlider) {
                autoSlider.stop();
            }
        }
    }, []);

    const goLeft = useCallback((event) => {
        if (event && event.preventDefault) event.preventDefault();
        let nextInitialCard = activeCard - 1;
        if (nextInitialCard < 0) {
            nextInitialCard = numberOfChildren - 1;
        }
        setActiveCard(nextInitialCard);
    }, [activeCard]);

    const goRight = useCallback(() => {
        if (event && event.preventDefault) event.preventDefault();
        let nextInitialCard = activeCard + 1;
        if (numberOfChildren - 1 < nextInitialCard) {
            nextInitialCard = 0;
        }
        setActiveCard(nextInitialCard);
    }, [activeCard]);

    const renderChildren = (children) => {
        const displayCards: any = [];
        Children.forEach(children, (child, index) => {
            displayCards.push((
                <CardWrapper key={index} width={childWidth}>
                    {child}
                </CardWrapper>
            ));
        });
        return displayCards;
    }

    const renderDots = () => {
        const array = new Array(numberOfChildren);
        return array.map((index) => <Dot key={index} active={index === activeCard} onClick={() => setActiveCard(index)}/>);
    }

    return (
        <div
            onMouseLeave={() => autoSlider && autoSlider.resume()}
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

