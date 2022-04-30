import React from "react";
import {StarFilled, StarTwoTone} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {actions} from "../../../../redux/messagesReducer";
import {Button} from "antd";

type PropsType = {
    id: string
    isFavorite?: boolean
}

const ICON_COLOR = "#0088EE";

export const FavoriteIcon: React.FC<PropsType> = ({isFavorite = false, id}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(actions.toggleIsFavoriteMessageByIdAC(id))
    }

    return (
        <Button
            onClick={onClick}
            icon={isFavorite ? <StarFilled style={{color: ICON_COLOR}}/> : <StarTwoTone twoToneColor={ICON_COLOR}/>}
        />
    )
}