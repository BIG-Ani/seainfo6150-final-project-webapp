import React from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";
import AboutImg from "../images/mainpage.png"

import styles from "./About.module.css";
import {Link} from "react-router-dom";

const About = () => {

    return(
        <div className={styles.container}>
            <div>
                <NaviBar />
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.errorImg} src={AboutImg} alt="About Image: just to be simple"/>
            </div>

            <div className={styles.aboutText}>
                <h2><a href="https://www.linkedin.com/in/leichenzhou/">ABOUT ME</a></h2>

                <ul>
                    <li>Understand basic usability, user experience and accessibility principles</li>
                    <li>Have a basic understanding and practical knowledge of HTML5</li>
                    <li>Write valid, well-formed, scalable, and semantically appropriate HTML5 within the context of a React app</li>
                    <li>Have a basic understanding and practical knowledge of CSS</li>
                    <li>Write CSS stylesheets within the context of a React app</li>
                    <li>Have a basic understanding and practical knowledge of Javascript</li>
                    <li>Have a basic understanding and practical knowledge of React and app development within the context of a React app.</li>
                    <li>Identify the types of images used in modern web design and explain what types are appropriate for different functions </li>
                </ul>
            </div>

        </div>
    );

}

export default About;