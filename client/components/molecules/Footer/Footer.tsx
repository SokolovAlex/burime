import React from 'react';
import styled from 'styled-components';
import { VkWithCircle } from '@styled-icons/entypo-social/VkWithCircle'
import { Section } from '../../atoms/Section/Section'

const FooterSection = styled.div`
    border-top: 1px solid silver;
    background-color: #ececec;
    padding: 20px 0;
    flex: 0 0 auto;
`;

const FooterWrapper = styled.div`
    display: flex;
    font-size: 20px;
`;

const FooterLeft = styled.div`
    flex: 1 1 20%;
`;

const FooterRight = styled.div`
    flex: 1 1 80%;
    text-align: right;
`;

const FooterIconLink = styled.a`
    margin-left: 12px;
`;

export const Footer = () => (
    <FooterSection>
        <Section>
            <FooterWrapper>
                <FooterLeft>© 2020</FooterLeft>
                <FooterRight>
                    Делитесь своими впечатлениями и идеями, договаривайтесь об играх в ВК.
                    <FooterIconLink href='vk.com/club194477253'>
                        <VkWithCircle width={24}/>
                    </FooterIconLink>
                </FooterRight>
            </FooterWrapper>
        </Section>
    </FooterSection>
);
