import React from 'react';
import s from './MessagesItem.module.css';
import {IMessage} from "../../../types/types";
import {UserPhoto} from "./Compontents/UserPhoto";
import {MessageDate} from "./Compontents/MessageDate";
import {MainText} from "./Compontents/MainText";
import {MainMedia} from "./Compontents/MainMedia";
import {ContentAuthor} from "./Compontents/ContentAuthor";

type PropsType = {
    message: IMessage
}

const MessagesItem: React.FC<PropsType> = ({message}) => {
    const {attachments, author, content, date, id, isFavorite} = message;
    return (
        <div className={s.messages__card}>
            <div className={s.card}>
                <div className={s.card__row}>
                    <div className={s.card__leftColumn}>
                        <UserPhoto/>
                        <MessageDate date={date}/>
                    </div>
                    <div className={s.card__rightColumn}>
                        <div className={s.content}>
                            <div className={s.content__author}>
                                <ContentAuthor author={author} isFavorite={isFavorite} id={id}/>
                            </div>
                            <div className={s.content__main}>
                                <MainText content={content}/>
                                <MainMedia attachments={attachments}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.card__row}>
                    <span className={s.card__hashtag}>#Новое</span> #Эксперт
                </div>
            </div>
        </div>
    )
}

export default React.memo(MessagesItem);