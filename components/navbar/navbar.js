import React from "react";
import styles from '../../styles/Navbar.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbarWrapper}>
                <img src={"https://cdn-www.bluestacks.com/bs-images/bs-logo-new.png"} width={147} height={45}/>
            </div>
        </div>
    )
}

export default Header;