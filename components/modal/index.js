import React from "react"
import style from "../../styles/Modal.module.css";

const Modal = props => {
    const {
        onClose = () => {}
    } = props;
    return(
        <>
            <div className={style.modalWrapper}>
                    {props.children}
                    <div className={style.btnWrap}>
                        <button onClick={onClose} className={style.btn}>
                            Close
                        </button>
                    </div>
            </div>
            <div className={style.bgOverlay}/>
        </>
    )
}

export default  Modal;