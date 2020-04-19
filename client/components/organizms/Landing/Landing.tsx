import React from "react";
import { LandingItem, LandingWrapper, LandingBlocks, LandingPromo, LandingBlock, LandingRules } from './styled';
import { Title } from "../../atoms/Title/Title";
import { MySlider } from './../../molecules/MySlider/MySlider';
import { Slide } from "./Slide";

const settings = {
    autoSlide: 3000,
};

export const Landing = () => (<LandingWrapper>
    <Title>Играем в буриме вместе!</Title>

    <MySlider {...settings}>
        <Slide img='/fun.jpg' title='Это весело' text='Играй с друзьями'/>
        <Slide right img='/idea.jpg' title='Это креативно' text='Не границ для фантазии кроме рифм и размера'/>
        <Slide img='/words1.jpg' title='Это полезно' text='Лексикон и владение словом'/>
        <Slide right img='/heart.jpg' title='Это арт-терапия' text='Разберись в себе, вынимая из головы свои слова'/>
        <Slide img='/poetry.jpg' title='Это поэзия' text='Учимся писать стихи'/>
        <Slide right img='/words5.jpg' title='Это по-настоящему' text='Пишите реальные хиты'/>
    </MySlider>

    <Title>Что такое Буриме</Title>

    <LandingItem>
        Буриме - эффективный способ словотворчества
    </LandingItem>

    <LandingItem>
        Буриме (фр. bouts-rimés «рифмованные концы») — литературная игра, заключающаяся в сочинении стихов, чаще шуточных, на заданные рифмы, иногда ещё и на заданную тему.
        Иногда к буриме относят и другую игру, называемую также «игрой в чепуху»: записывают несколько строк или даже строф и передают листок партнёру для продолжения, оставив видимыми только последние из них.
    </LandingItem>

    <LandingItem>
        Хоть и буриме игра несерьезная, но у нее есть свои плюсы: она является хорошим упражнение креативности, помогает писателям расписаться и преодолеть самоцензуру, воспитывает навыки рифмовки и закаляет характер временными трудностями.
        Возможно, кому-то эта игра поможет выйти из творческого тупика или будет источником новых идей и рифм.
    </LandingItem>

    <Title>
        Играйте в удовольствие и развивайтесь!
    </Title>

    <LandingPromo>
        <Title>Интересные факты</Title>
        <LandingBlocks>
            <LandingBlock>
                Буриме пользовалось популярностью у поэтов XX века (Бретон, Элюар, Арагон)
            </LandingBlock>
            <LandingBlock>
                Буриме входило в качестве одного из традиционных заданий в конкурсы КВН.
            </LandingBlock>
            <LandingBlock>
                Игру в буриме стали включать в состав тренингов многие компании.
            </LandingBlock>
            <LandingBlock>
                Эта игра помогает развивать находчивость, воображение и чувство юмора, позволяет создавать ассоциативные связи между разными, на первый взгляд, словами, развивать лексикон.
            </LandingBlock>
        </LandingBlocks>
    </LandingPromo>

    <Title>Правила игры</Title>

    <LandingRules>
        <LandingItem>
            Представьте у вас есть лист бумаги, 2 ручки и желание поиграть в интеллектуальную игру и одновременно потренировать свои творческие навыки
        </LandingItem>
        <Slide img='/fun.jpg' text='Напишите 2 строчки на заданную тему'/>
        <Slide right img='/fun.jpg' text='Затем согните листок так чтобы было видно только вашу последнюю строку и передайте другому игроку'/>
        <Slide img='/fun.jpg' text='Второй игрок видит вашу последнюю строку и пишет свои две строки, стараясь максимально рифмовать и соблюдать размер стихотворения'/>
        <Slide right img='/fun.jpg' text='Так продолжается пока не закончится бумага или оба игрока не решат остановиться'/>
        <Slide img='/fun.jpg' text='Теперь разверните листок - прочтите что у Вас получилось в совместном творчестве. Возможно, перед вам без двух минут шедевр. '/>
    </LandingRules>
</LandingWrapper>);
