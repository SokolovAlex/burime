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
    display: flex;
    align-items: center;
`;

export const InputLabelHost = styled.div`
    margin-bottom: 4px;
    margin-right: 20px;
`;

export const InputInlineLabel = styled.label`
    flex: 0 0 20%;
`;

export const InputHelp = styled.div`
    padding-top: 8px;
    font-size: 16px;
    color: silver;
`;

export const InputValue = styled.div`
    flex: 1 1 auto;
`;
