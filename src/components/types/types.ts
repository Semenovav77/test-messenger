export type DialogType = {
    id: string,
    userName: string,
    lastMessageDate: string,
    avatar: string
}
export type MessageType = {
    id: string,
    text: string,
    addedAt: string,
    senderId: string,
    dialogId: string
}