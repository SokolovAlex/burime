import React, { useState, useCallback, ChangeEvent, useRef } from 'react';
import { useSocket } from '../../services/socket';
import {
    ChatContainer,
    MessagesContainer,
    ChatHeader,
    ChatToolBar,
    ChatInputWrapper,
    CloseIcon,
    ChatAction,
    ChatInner,
    ChatMessage,
    MessageContent,
    MessageAuthor,
    MessageInfo,
    MessageDate,
    ChatInput,
    ContentWrapper,
    ChatHeaderInner,
} from './styled';
import { isClient } from '../../config';
import { useUser } from '../../services/contexts/auth';
import { CSSTransition } from 'react-transition-group';
import { Send } from '@styled-icons/boxicons-regular/Send';
import { sendCommonMessage } from '../../constants/socketEvents';
import { UsersBadge } from './UsersBadge/UsersBadge';
import { useMessages } from '../../services/api/messages';
import { format } from '../../services/date';

export const Chat = () => {
    const user = useUser();
    if (!isClient || !user) {
        return null;
    }
    const socket = useSocket();
    const [open, setOpen] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const { messages, activeUsers } = useMessages(user.email, socket);
    const endEl = useRef<HTMLDivElement>(null);

    const openChat = useCallback(() => {
        if (open) return;
        if (!endEl || !endEl.current) return;
        setTimeout(() => endEl.current && endEl.current.scrollIntoView({ behavior: 'smooth' }), 500);
        setOpen(true);
    }, [open]);
    const printMessage = (e: ChangeEvent<HTMLInputElement>) =>
        setNewMessage(e.currentTarget.value);
    const sendMessage = useCallback(() => {
        if (!newMessage) {
            return;
        }
        socket.emit(sendCommonMessage, { author: user, content: newMessage });
        setNewMessage('');
    }, [socket, newMessage]);

    return (
        <ChatContainer>
            { !open && <ChatHeader onClick={openChat}>
                    <ChatHeaderInner>
                        <UsersBadge amount={activeUsers} />
                    </ChatHeaderInner>
                </ChatHeader>
            }
            <CSSTransition in={open} timeout={500}>
                <ChatInner>
                    <ContentWrapper>
                        <CloseIcon onClick={() => setOpen(false)}></CloseIcon>
                        <MessagesContainer>
                            {messages.map(message => (
                                <ChatMessage key={message.id}>
                                    <MessageInfo>
                                        <MessageAuthor isMine={message.isMine}>
                                            {message.author.name}:
                                        </MessageAuthor>
                                        <MessageDate>
                                            {format(message.date)}
                                        </MessageDate>
                                    </MessageInfo>
                                    <MessageContent>
                                        {message.content}
                                    </MessageContent>
                                </ChatMessage>
                            ))}
                            <div ref={endEl}></div>
                        </MessagesContainer>
                    </ContentWrapper>
                    <ChatToolBar>
                        <ChatInputWrapper>
                            <ChatInput
                                value={newMessage}
                                placeholder="ваше сообщение"
                                onChange={e => printMessage(e)}
                            ></ChatInput>
                        </ChatInputWrapper>
                        <ChatAction onClick={sendMessage}>
                            <Send width={24}></Send>
                        </ChatAction>
                    </ChatToolBar>
                </ChatInner>
            </CSSTransition>
        </ChatContainer>
    );
};
