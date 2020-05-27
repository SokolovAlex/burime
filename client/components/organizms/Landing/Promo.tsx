import React from "react";
import { PromoWrapper, PromoCard, PromoImg, PromoTitle } from './styled';

const promoData = [{
    title: 'Это весело',
    text: 'Играй с друзьями',
    img: 'promo/fun.jpg'
}, {
    title: 'Это креативно',
    text: 'Не границ для фантазии кроме рифм и размера',
    img: 'promo/idea.jpg'
}, {
    title: 'Это полезно',
    text: 'Развиваем лексикон и владение словом',
    img: 'promo/lexicon.jpg'
}, {
    title: 'Это арт-терапия',
    text: 'Разберись в себе, вынимая из головы свои мысли',
    img: 'promo/heart.jpg'
}, {
    title: 'Это по-настоящему',
    text: 'Пишите реальные хиты',
    img: 'promo/words5.jpg'
}, {
    title: 'Это поэзия',
    text: 'Учимся писать стихи своим близким',
    img: 'promo/poetry.jpg'
}];

export const Promo = () => (
    <PromoWrapper>
        { promoData.map(({ title, text, img }, i) => (
            <PromoCard key={i}>
                <PromoImg alt={title} src={img}/>
                <PromoTitle>{title}</PromoTitle>
                <div>{text}</div>
            </PromoCard>
        ))}
    </PromoWrapper>
);
