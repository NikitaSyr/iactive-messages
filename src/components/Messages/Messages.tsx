import s from './Messages.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getMessagesList, requestFirstMessages, requestNewMessages} from "../../redux/messagesReducer";
import {useEffect, useState} from "react";
import MessagesItem from "./MessagesItem/MessagesItem";
import {IMessage, SortDirectionType} from "../../types/types";
import {MessageSort} from "./MessageSort/MessageSort";

const MESSAGE_UPDATING_TIMEOUT_MS = 5000

const Messages = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sortDirection, setSortDirection] = useState<SortDirectionType>(SortDirectionType.asc)
    const [messagesUpdater, setMessagesUpdater] = useState({});
    const messagesList = useSelector(getMessagesList)
    const dispatch = useDispatch();

    const updateMessagesDelay = (delay: number) => {
        setTimeout(() => {
            setMessagesUpdater({})
        }, delay)
    }

    useEffect(() => {
        (async () => {
            const lastMessageId = messagesList[messagesList.length - 1]?.id;
            if (lastMessageId) {
                //@ts-ignore
                await dispatch(requestNewMessages(lastMessageId));
                updateMessagesDelay(MESSAGE_UPDATING_TIMEOUT_MS);
            } else {
                setIsLoading(true)
                //@ts-ignore
                await dispatch(requestFirstMessages());
                setIsLoading(false)
                updateMessagesDelay(MESSAGE_UPDATING_TIMEOUT_MS);
            }
        })()
    }, [dispatch, messagesUpdater])

    const sortMessagesList = (messagesList: Array<IMessage>, sortDirection: SortDirectionType): Array<IMessage> => {
        return [...messagesList].sort((a, b) =>
            sortDirection === SortDirectionType.asc
                ? +a.id - +b.id
                : +b.id - +a.id)
    }

    const messageElements = sortMessagesList(messagesList, sortDirection).map(item =>
        <MessagesItem key={item.id} message={item}/>)

    return (
        <div className={s.messages}>
            {isLoading
                ?
                <div className={s.messages__row}>
                    Идёт загрузка
                </div>
                :
                <div className={s.messages__row}>
                    <MessageSort sortDirection={sortDirection} setSortDirection={setSortDirection}/>
                    {messageElements}
                </div>
            }

        </div>
    )
}

export default Messages;