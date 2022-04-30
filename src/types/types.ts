export type AttachmentsType = {
    type: string
    url: string
}

export type MessageListType = Array<IMessage>

export interface IMessage  {
    attachments: Array<AttachmentsType> | []
    author: string
    channel: string
    content: string
    date: string
    id: string
    region: string
    senderNumber: string
    isFavorite: boolean
}

export interface IState {
    messagesList: MessageListType
}

export enum SortDirectionType {asc = "ASC", desc = "DESC"}