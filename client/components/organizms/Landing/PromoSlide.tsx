import React from "react";
import { MySlider } from './../../molecules/MySlider/MySlider';
import { Slide } from "../../molecules/Slide/Slide";

const settings = {
    autoSlide: 3000,
};

export const Landing = () => (<div>
        <MySlider {...settings}>
            <Slide img='/fun.jpg' title='Это весело' text='Играй с друзьями'/>
            <Slide right img='/idea.jpg' title='Это креативно' text='Не границ для фантазии кроме рифм и размера'/>
            <Slide img='/words1.jpg' title='Это полезно' text='Лексикон и владение словом'/>
            <Slide right img='/heart.jpg' title='Это арт-терапия' text='Разберись в себе, вынимая из головы свои слова'/>
            <Slide img='/poetry.jpg' title='Это поэзия' text='Учимся писать стихи'/>
            <Slide right img='/words5.jpg' title='Это по-настоящему' text='Пишите реальные хиты'/>
        </MySlider>
    </div>
)