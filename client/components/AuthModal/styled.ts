import styled from 'styled-components';
import { breakpoints } from '../../constants';

export const Centered = styled.div`
    display: flex;
    margin-bottom: 12px;
    justify-content: center;
`;

export const LightText = styled.div`
    color: silver;
    font-size: 12px;
    text-decoration: underline;
`;

export const LoginContainer = styled.div`
    min-width: 200px;
    padding: 20px 60px;
    @media ${breakpoints.mobile} {
        min-width: 300px;
    }
`;

export const InputWrapper = styled.div`
    text-align: center;
    margin-bottom: 12px;
`;

export const ActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const SocialButton = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    color: white;
    border-width: 0;
    border-radius: 50%;
    white-space: nowrap;
    box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
    transition-property: background-color, box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    & :focus,
    & :hover {
        box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.1);
    }
`;

export const VkButton = styled(SocialButton)`
    background: #4a76a8;
    & :focus,
    & :hover {
        background: #3d6898;
    }
`;

export const GoogleButton = styled(SocialButton)`
    background: #4285f4;

    & :focus,
    & :hover {
        background: #2074ff;
    }
`;
