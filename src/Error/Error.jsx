import React from 'react'
import notFound from "../images/error.png";
import NaviBar from "../Bar/NaviBar/NaviBar";

import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.container}>
            <div>
                <NaviBar />
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.errorImg} src={notFound} alt="Page Not Found"/>
            </div>

        </div>
    )
}

export default Error
