import styled from 'styled-components';

export const TextAreaHost = styled.textarea`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    resize: none;

    &:disabled {
        opacity:0.5;
        background-color: silver;
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
    }
`;