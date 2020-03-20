import styled, { css } from 'styled-components';
import { colors, animations } from './../../constants';
import { CloseO } from '@styled-icons/evil/CloseO';

export const ChatContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 300px;
    right: 0;
    border: 1px solid silver;
    border-radius: 4px;
`;

export const ChatHeader = styled.div<{ open: boolean }>`
    background-color: ${colors.primary};
    color: ${colors.textPrimary};
    text-align: center;
    padding: 10px;
    font-family: 'Neucha', cursive;
    position: relative;
    ${props =>
        !props.open &&
        css`
            cursor: pointer;
        `}
`;

export const ChatInner = styled.div`
    ${animations.slider}
    display: flex;
    flex-direction: column;
`;

export const ChatToolBar = styled.div`
    border-top: 1px solid silver;
    flex: 0 0 40px;
    display: flex;
    align-items: center;
`;

export const ChatInput = styled.input`
    font-size: 18px;
    padding: 10px;
    padding-right: 24px;
    margin: 10px;
    border: none;
    ::placeholder {
        color: ${colors.plaseholder};
    }
`;

export const ChatInputWrapper = styled.div`
    flex: 1 1 auto;
`;

export const ChatAction = styled.div`
    flex: 0 0 auto;
    padding: 5px 12px;
    color: ${colors.primary};
    cursor: pointer;
`;

export const CloseIcon = styled(CloseO)`
    color: ${colors.primary};
    width: 32px;
    position: absolute;
    left: -35px;
    cursor: pointer;
`;

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    background-color: #e2e2e2;
`;

export const ContentWrapper = styled.div`
    height: 400px;
    flex: 1 1 auto;
    overflow-y: scroll;
`;

export const ChatMessage = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const MessageInfo = styled.div`
    flex-basis: 30%;
`;

export const MessageDate = styled.div`
    font-size: 8px;
`;

export const MessageAuthor = styled.div<{ isMine: boolean }>`
    ${props =>
        props.isMine &&
        css`
            color: ${colors.secondary};
        `}
`;

export const MessageContent = styled.div`
    flex-basis: 70%;
`;
