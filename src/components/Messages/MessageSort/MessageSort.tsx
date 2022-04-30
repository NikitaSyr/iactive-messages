import React from "react";
import {SortDirectionType} from "../../../types/types";
import {Button} from "antd";
import s from "./MessageSort.module.css";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";

type PropsType = {
    sortDirection: SortDirectionType
    setSortDirection: (e: SortDirectionType) => void
}

const ICON_COLOR = "#0088EE";

export const MessageSort: React.FC<PropsType> = ({sortDirection, setSortDirection}) => {
    const sortDirectionControl = (sortDirection === SortDirectionType.asc);

    const onClick = () => {
        if (sortDirection === SortDirectionType.asc) {
            setSortDirection(SortDirectionType.desc)
        } else {
            setSortDirection(SortDirectionType.asc)
        }
    }

    return (
        <div className={s.messages__sort}>
            Сортировать: <Button
                onClick={onClick}
                icon={sortDirectionControl ? <ArrowDownOutlined style={{color: ICON_COLOR}}/> : <ArrowUpOutlined style={{color: ICON_COLOR}}/>}
            >
                {sortDirectionControl ? <>Сначала старые</> : <>Сначала новые</>}
                </Button>
        </div>
    )
}

