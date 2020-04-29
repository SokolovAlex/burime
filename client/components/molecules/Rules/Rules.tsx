import React from 'react';
import styled from 'styled-components';
import { Slide } from '../Slide/Slide';

const RulesWrapper = styled.div`
    margin-bottom: 12px;
`;

const rulesFont = 23;

export const Rules = () => (
    <RulesWrapper>
        <Slide fontSize={rulesFont} slideNumber={1} right img='/rules/step_1.jpg' text='Представьте, у вас есть лист бумаги, 2 ручки и желание поиграть и одновременно потренировать свои творческие навыки'/>
        <Slide fontSize={rulesFont} slideNumber={2} img='/rules/step_2.jpg' text='Напишите 2 строчки на заданную тему'/>
        <Slide fontSize={rulesFont} slideNumber={3} right img='/rules/step_3.jpg' text='Затем согните листок так чтобы было видно только вашу последнюю строку и передайте другому игроку'/>
        <Slide fontSize={rulesFont} slideNumber={4} img='/rules/step_4.jpg' text='Второй игрок видит вашу последнюю строку и пишет свои две строки, стараясь максимально рифмовать и соблюдать размер стихотворения'/>
        <Slide fontSize={rulesFont} slideNumber={5} right img='/rules/step_5.jpg' text='Так продолжается пока не закончится бумага или оба игрока не решат остановиться'/>
        <Slide fontSize={rulesFont} slideNumber={6} img='/rules/step_6.jpg' text='Теперь разверните листок - прочтите что у Вас получилось в совместном творчестве. Возможно, перед вам без двух минут шедевр. '/>
    </RulesWrapper>
);
