import Socket from 'socket.io-client'
import React, { createContext, useContext, Component } from 'react'
import { UserModel } from '../models/user'

const serverUrl = 'http://localhost:3003'

export const SocketContext = createContext<SocketIOClient.Socket | null>(null)

export const useSocket = () => {
    return useContext(SocketContext) as SocketIOClient.Socket
}

export class SocketProvider extends Component<{
    user: UserModel | undefined
    opts?: any
}> {
    state: {
        socket: SocketIOClient.Socket | null
    } = {
        socket: null,
    }
    constructor(props) {
        super(props)
        if (!props.user) {
            return
        }
        this.state = {
            socket: Socket(serverUrl, props.opts || { 
                query: `user=${props.user.email}`,
            }),
        }
    }

    render() {
        return (
            <SocketContext.Provider value={this.state.socket}>
                {this.props.children}
            </SocketContext.Provider>
        );
    }
}
