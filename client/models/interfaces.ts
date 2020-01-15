import { UserModel } from './user'

export interface ChatMessageModel {
    id: number
    content: string
    author: UserModel
    isMine: boolean
    date?: string
}
