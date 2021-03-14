import React, {useContext} from "react";
import style from "../../styles/tab.module.css"; 
import {LocalizationContext} from "../../context/localizationContext";
import { texts } from "../../utils/texts";

const Tab = props => {
    const {
        selected,
        data,
        select
    } = props;
    const langContext = useContext(LocalizationContext)
    return(
        <div key={data.id} className={`${selected.id === data.id ? style.selected : ''}  ${style.tab}`} onClick={_=> select(data)}>
            <div>{texts[langContext][data.id]}</div>
        </div>
    )
}

export default Tab;