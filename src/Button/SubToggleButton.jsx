import React from 'react'

import styles from './SubToggleButton.module.css'

const SubToggleButton = (props) => {

    return(
        <button className={styles.button} onClick={props.onClick}>
            {props.bottonText}
        </button>
    );

}

export default SubToggleButton;