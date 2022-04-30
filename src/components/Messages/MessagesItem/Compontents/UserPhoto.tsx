import React from "react";
import userPhoto from "../../../../assets/user_circle.png";
import s from "./UserPhoto.module.css";

export const UserPhoto: React.FC = () => {
    return (
        <img src={userPhoto} alt={""} className={s.messages__photo}/>
    )
}