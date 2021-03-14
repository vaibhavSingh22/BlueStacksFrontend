import React from "react";
import style from "../../styles/tab.module.css";
import Tab  from "./tab";

const TabRows = props => {

    const {
        data = [],
        selected,
        select
    } = props;
    return (
        <div className={`${style.row} rowMedia`}>
            {data.map(tab => <Tab selected={selected} data={tab} select={select}/>)}
        </div>
    )
}
export default TabRows;