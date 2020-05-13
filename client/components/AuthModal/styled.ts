import styled from 'styled-components'

export const Centered = styled.div`
    display: flex;
    margin-bottom: 12px;
    justify-content: center;
`

export const LightText = styled.div`
    color: silver;
    font-size: 12px;
    text-decoration: underline;
`

export const LoginContainer = styled.div`
    min-width: 300px;
    padding: 20px 60px;
`

export const InputWrapper = styled.div`
    text-align: center;
    margin-bottom: 12px;
`

export const ActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const GoogleButton = styled.a`
    padding: 10px 20px;
    display: flex;
    color: white;

    border-width: 0;
    background: #4285f4;

    border-radius: 2px;
    white-space: nowrap;
    box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
    transition-property: background-color, box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    text-decoration: none;

    & :focus,
    & :hover {
        box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.1);
    }

    & span {
        padding-left: 20px;
    }
`;
