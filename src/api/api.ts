import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {IMessage} from "../types/types";

const config: AxiosRequestConfig = {
    baseURL: `http://f0665380.xsph.ru/`,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const instance: AxiosInstance = axios.create(config);

export const messagesAPI = {
    async postFirstMessages(): Promise<Array<IMessage>> {
        const response = await instance.post("", {
            messageId: 0,
            actionName: "MessagesLoad"
            }
        );
        return response.data.Messages;
    },
    async postNewMessage(id: string): Promise<Array<IMessage> | undefined> {
        const response = await instance.post("", {
                messageId: id,
                actionName: "MessagesLoad"
            }
        );
        return response.data.Messages;
    },
}
