import React from "react";
import { PromoWrapper, PromoCard, PromoImg, PromoTitle } from './styled';

const promoData = [{
    title: 'Это весело',
    text: 'Играй с друзьями',
    img: '/fun.jpg'
}, {
    title: 'Это креативно',
    text: 'Не границ для фантазии кроме рифм и размера',
    img: '/idea.jpg'
}, {
    title: 'Это полезно',
    text: 'Развиваем лексикон и владение словом',
    img: '/words1.jpg'
}, {
    title: 'Это по-настоящему',
    text: 'Пишите реальные хиты',
    img: '/words5.jpg'
}, {
    title: 'Это арт-терапия',
    text: 'Разберись в себе, вынимая из головы свои слова',
    img: '/heart.jpg'
}, {
    title: 'Это поэзия',
    text: 'Учимся писать стихи своим близким',
    img: '/poetry.jpg'
}];

export const Promo = () => (
    <PromoWrapper>
        { promoData.map(({ title, text, img }) => (
            <PromoCard>
                <PromoImg alt={title} src={img}/>
                <PromoTitle>{title}</PromoTitle>
                <div>{text}</div>
            </PromoCard>
        ))}
    </PromoWrapper>
);
