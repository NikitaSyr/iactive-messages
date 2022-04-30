import React from "react";
import s from "./MessageDate.module.css";

type PropsType = {
    date: string
}

export const MessageDate: React.FC<PropsType> = ({date}) => {
    return (
        <div className={s.card__date}>
            {date.slice(11, 16)}
        </div>
    )
}