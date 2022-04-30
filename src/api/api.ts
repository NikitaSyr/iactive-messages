import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {IMessage} from "../types/types";
import {staticData} from "./staticData";

const config: AxiosRequestConfig = {
    baseURL: `http://f0665380.xsph.ru/`,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const instance: AxiosInstance = axios.create(config);

export const messagesAPI = {
    async postFirstMessages() {
        try {
            const response = await instance.post("", {
                    messageId: 0,
                    actionName: "MessagesLoad"
                }
            );
            return response.data.Message;
        }
        catch (e)  {
            console.log("Вы видите статичную версию приложения. Для просмотра динамической работы с API клонируйте репозиторий");
            return staticData as Array<IMessage>;
        }

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
