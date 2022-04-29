import {messagesAPI} from "../api/api";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {MessagesType} from "../types/types";

const SET_MESSAGES = 'messages/SET_MESSAGES';

let initialState = {
    messagesList: [] as Array<MessagesType>,
}


const messagesReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {
                ...state,
                messagesList: action.messagesList,
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setMessagesListAC: (messagesList: Array<MessagesType>) => ({type: SET_MESSAGES, messagesList} as const),
}

export const requestMessages = (): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const messagesList = await messagesAPI.getFirstMessages();
        console.log(messagesList)
        dispatch(actions.setMessagesListAC(messagesList));
    }
}


export default messagesReducer;

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getMessagesList = (state: AppStateType) => {
    return state.messagesPage.messagesList;
}

