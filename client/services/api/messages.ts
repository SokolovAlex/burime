import { getCommonMessage, changeActiveUsers } from './../../constants/socketEvents'
import { ChatMessageModel } from '../../models/interfaces'
import { useState, useEffect } from 'react'
import { getApi } from './api'

const api = getApi()

export const getCommonMessages = () =>
    api.get('/api/common-chat-messages').then(response => response.data)

export const useMessages = (email: string, socket) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [messages, setMessages] = useState<ChatMessageModel[]>([])
    const [activeUsers, setActiveUsers] = useState<number>(0)

    useEffect(() => {
        getCommonMessages()
            .then(data => {
                const messages: ChatMessageModel[] = data.messages.map(
                    message => {
                        message.isMine = message.author.email === email
                        return message
                    }
                )
                setActiveUsers(data.activeUsers)
                setMessages(messages)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));

        const onChangeActiveUsers = (activeUsers) => setActiveUsers(activeUsers);
        socket.on(changeActiveUsers, onChangeActiveUsers);
        return () => {
            socket.off(changeActiveUsers, onChangeActiveUsers);
        };
    }, [])

    useEffect(() => {
        const onGetMessage = (message) => {
            message.isMine = message.author.email === email;
            setMessages([...messages, message]);
        }
        socket.on(getCommonMessage, onGetMessage);
        return () => {
            socket.off(getCommonMessage, onGetMessage);
        };
    }, [messages]);

    return { loading, messages, error, activeUsers }
};
