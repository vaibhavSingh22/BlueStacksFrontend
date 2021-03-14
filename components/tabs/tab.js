import React from "react";
import style from "../../styles/tab.module.css"; 

const Tab = props => {
    const {
        selected,
        data,
        select
    } = props;
    return(
        <div key={data.id} className={`${selected.id === data.id ? style.selected : ''}  ${style.tab}`} onClick={_=> select(data)}>
            <div>{data.label}</div>
        </div>
    )
}

export default Tab;