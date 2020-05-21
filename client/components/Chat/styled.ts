import styled, { css } from 'styled-components';
import { colors, animations, breakpoints, shadow } from './../../constants';
import { CloseO } from '@styled-icons/evil/CloseO';

export const ChatContainer = styled.div`
    position: fixed;
    bottom: 110px;
    right: 0;
    @media ${breakpoints.mobile} {
        bottom: 66px;
    }
`;

export const ChatHeader = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    padding: 10px;
    font-family: 'Neucha', cursive;
    position: relative;
    cursor: pointer;
    ${shadow.simple}
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #005e7d;
    }
`;

export const ChatHeaderInner = styled.div`
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background-color: silver;
    transition: all 0.3s ease-in-out;

    &:hover {
        width: 98%;
        height: 98%;
    }
`;

export const ChatInner = styled.div`
    border: 1px solid silver;
    border-radius: 2px;
    ${shadow.small}
    ${animations.fade}
`;

export const ChatToolBar = styled.div`
    border-top: 1px solid silver;
    flex: 0 0 40px;
    display: flex;
    align-items: center;
    background-color: white;
`;

export const ChatInput = styled.input`
    font-size: 18px;
    padding: 10px;
    padding-right: 24px;
    margin: 10px;
    border: solid 1px ${colors.primary};
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
    left: -37px;
    cursor: pointer;
    background-color: white;
`;

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    background-color: #e2e2e2;
    height: 100%;
`;

export const ContentWrapper = styled.div`
    height: 400px;
    width: 360px;
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
