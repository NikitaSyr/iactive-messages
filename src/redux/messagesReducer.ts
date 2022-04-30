import {messagesAPI} from "../api/api";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {ThunkAction} from 'redux-thunk'
import {Dispatch, AnyAction} from "redux";
import {IMessage, IState} from "../types/types";

type ActionsTypes = InferActionsTypes<typeof actions>

const SET_MESSAGES = 'messages/SET_MESSAGES';
const TOGGLE_IS_FAVORITE = 'messages/TOGGLE_IS_FAVORITE';
const ADD_NEW_MESSAGES = 'messages/ADD_NEW_MESSAGES';

const initialState = {
    messagesList: []
}

const messagesReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {
                ...state,
                messagesList: action.messagesList,
            }
        }
        case ADD_NEW_MESSAGES: {
            const newMessagesSortedArray = action.payload.sort((a, b) => +a.id - +b.id)
            return {
                ...state,
                messagesList: [...state.messagesList, ...newMessagesSortedArray]
            }
        }
        case TOGGLE_IS_FAVORITE: {
            const modifiedList = state.messagesList.map(message => message.id === action.payload
                ? {...message, isFavorite: !message.isFavorite}
                : message)
            return {
                ...state,
                messagesList: modifiedList
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setMessagesListAC: (messagesList: Array<IMessage>) => ({type: SET_MESSAGES, messagesList} as const),
    addNewMessagesAC: (newMessages: Array<IMessage>) => ({type: ADD_NEW_MESSAGES, payload: newMessages} as const),
    toggleIsFavoriteMessageByIdAC: (id: string) => ({type: TOGGLE_IS_FAVORITE, payload: id} as const),
}

export const requestFirstMessages = (): ThunkAction<void, IState, unknown, AnyAction> => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const messagesList = await messagesAPI.postFirstMessages();
        dispatch(actions.setMessagesListAC(messagesList));
    }
}

export const requestNewMessages = (id: string): ThunkAction<void, IState, unknown, AnyAction> => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const newMessage = await messagesAPI.postNewMessage(id);
        if (!newMessage) {
            return
        }
        dispatch(actions.addNewMessagesAC(newMessage));
    }
}

export const getMessagesList = (state: AppStateType) => {
    return state.messagesPage.messagesList;

}

export default messagesReducer;
