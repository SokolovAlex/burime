import React from 'react';
import styled from 'styled-components';
import { VkWithCircle } from '@styled-icons/entypo-social/VkWithCircle'
import { Section } from '../../atoms/Section/Section'

const FooterWrapper = styled.div`
    border-top: 1px solid silver;
    background-color: #ececec;
    padding: 20px 0;
`;

export const Footer = () => (
    <FooterWrapper>
        <Section>
            © 2020 
            группа в вк. собирайтесь в группе. делитесь своими впечатлениями. договаривайтесь об играх.
            <a href='vk.com/ierroglif'>
                <VkWithCircle width={24}/>
            </a>
        </Section>
    </FooterWrapper>
);
