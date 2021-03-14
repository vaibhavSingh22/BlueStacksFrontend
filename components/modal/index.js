import React, { useContext } from "react";
import {LocalizationContext} from "../../context/localizationContext";
import { texts } from "../../utils/texts";
import style from "../../styles/Modal.module.css";

const Modal = props => {
    const {
        onClose = () => {}
    } = props;
    const langContext = useContext(LocalizationContext);
    return(
        <>
            <div className={style.modalWrapper}>
                    {props.children}
                    <div className={style.btnWrap}>
                        <button onClick={onClose} className={style.btn}>
                        {texts[langContext]["CLOSE"]}
                        </button>
                    </div>
            </div>
            <div className={style.bgOverlay}/>
        </>
    )
}

export default  Modal;