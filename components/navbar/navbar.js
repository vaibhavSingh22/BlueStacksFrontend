import React, { useContext } from "react";
import styles from '../../styles/Navbar.module.css';
import {LocalizationContext} from "../../context/localizationContext";
import { texts } from "../../utils/texts";

const Header = (props) => {
    const {
        changeState = () => {}
    } = props;
    const langContext = useContext(LocalizationContext);
    return (
        <div className={styles.container}>
            <div className={styles.navbarWrapper}>
                <img src={"https://cdn-www.bluestacks.com/bs-images/bs-logo-new.png"} width={147} height={45}/>
            </div>
            <button className={styles.switchBtn} onClick={_=>changeState(langContext === "ENG" ? "GER" : "ENG")}>
                {texts[langContext]["SWITCH"]}
            </button>
        </div>
    )
}

export default Header;