import React, {useState} from "react";
import s from "./MainText.module.css";
import {Button} from "antd";

type PropsType = {
    content: string
}

const TEXT_LIMIT = 250;

export const MainText: React.FC<PropsType> = ({content}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isButtonHidden = content.length < TEXT_LIMIT;

    const onClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={s.main__text}>
            <div>
                {isExpanded ? content : content.slice(0, TEXT_LIMIT)}
            </div>
            <Button type="text" className={s.main__button} onClick={onClick} hidden={isButtonHidden}>
                {isExpanded ? "свернуть" : "далее"}
            </Button>
        </div>
    )
}