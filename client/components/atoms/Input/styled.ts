import styled from 'styled-components';

export const InputHost = styled.input`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    max-width: 400px;
`;

export const InputRowHost = styled.div<{margin?: number }>`
    margin-bottom: ${props => props.margin || 12}px;
`;

export const InputLabelHost = styled.div`
    margin-bottom: 4px;
`;

export const InputInlineLabel = styled.label`
    display: inline-block;
    width: 20%;
`;
