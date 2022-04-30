import s from "./MainMedia.module.css";
import {Button} from "antd";
import React from "react";
import {AttachmentsType} from "../../../../types/types";

type PropsType = {
    attachments: Array<AttachmentsType>
}

export const MainMedia: React.FC<PropsType> = ({attachments}) => {
    return (
        <div className={s.main__media}>
            {attachments.length === 1 &&
                ((attachments[0].type === "image")
                    ? <img src={attachments[0].url} alt="" className={s.media__image}/>
                    : <div className={s.media__button}>
                        <Button type="link" href={attachments[0].url}
                                className={s.media__button}
                        >Смотреть видео</Button>
                    </div>)
            }
        </div>
    )
}