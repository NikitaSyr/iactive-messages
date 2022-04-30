import React from "react";
import s from "./ContentAuthor.module.css";
import {FavoriteIcon} from "./FavoriteIcon";

type PropsType = {
    author: string
    isFavorite: boolean
    id: string
}

export const ContentAuthor: React.FC<PropsType> = ({author,isFavorite,id}) => {

    return (
        <div className={s.author}>
            <div className={s.author__row}>
                <div className={s.author__text}>
                    <div className={s.author__name}>
                        {author}
                    </div>
                    <div className={s.author__comment}>
                        Текст поста в соц. сетях если это комментарий
                    </div>
                </div>
                <div className={s.author__star}>
                    <FavoriteIcon isFavorite={isFavorite} id={id}/>
                </div>
            </div>
        </div>
    )
}
