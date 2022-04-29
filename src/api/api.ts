import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    baseURL: `http://f0665380.xsph.ru/`,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const instance: AxiosInstance = axios.create(config);

export const messagesAPI = {
    async getFirstMessages() {
        const response = await instance.post("", {
            messageId: 0,
                actionName: "MessagesLoad"
            }
        );
        return response.data.Messages;
    },
}
