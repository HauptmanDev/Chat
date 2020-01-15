export const SET_PRIVATE_CHATS = 'CHAT-PROJECT/SET-PRIVATE-CHATS';

interface IChatsSetPrivateChats {
    type: typeof SET_PRIVATE_CHATS;
    privateChats: Array<any>;
}

export type IChatsActions = IChatsSetPrivateChats;

export const nameChatUses = (privateChats: Array<any>): IChatsActions => ({
    type: SET_PRIVATE_CHATS,
    privateChats,
});
