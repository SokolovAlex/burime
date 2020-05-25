import React from "react";
import { LandingItem, LandingBlocks, LandingPromo, LandingBlock } from './styled';
import { Title } from "../../atoms/Title/Title";
import { Rules } from "../../molecules/Rules/Rules";
import { Promo } from "./Promo";
import { Section, Background } from '../../atoms/Section/Section'

export const Landing = () => (<>
    <Section>
        <Title underline>Играем в буриме вместе!</Title>
        <LandingItem>
            Хоть и буриме игра несерьезная, но у нее есть свои плюсы: она является хорошим упражнение креативности, помогает писателям расписаться и преодолеть самоцензуру, воспитывает навыки рифмовки и закаляет характер временными трудностями.
            Возможно, кому-то эта игра поможет выйти из творческого тупика или будет источником новых идей и рифм.
        </LandingItem>
    </Section>

    <Background>
        <Promo/>
    </Background>

    <Section>
        <Title>Что такое Буриме?</Title>
        <LandingItem>
            Буриме (фр. bouts-rimés «рифмованные концы») — литературная игра, заключающаяся в сочинении стихов, чаще шуточных, на заданные рифмы, иногда ещё и на заданную тему.
            Иногда к буриме относят и другую игру, называемую также «игрой в чепуху»: записывают несколько строк или даже строф и передают листок партнёру для продолжения, оставив видимыми только последние из них.
        </LandingItem>
        <Title underline>
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
        <Rules/>
    </Section>
</>);
