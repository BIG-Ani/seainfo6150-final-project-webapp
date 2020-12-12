import React from 'react'

import styles from './NaviBar.module.css'
import {Link} from "react-router-dom";

const NaviBar = () => {

    return(
        <div className={styles.navContainer}>
            <header className={styles.container}>
                <nav>
                    {/*<a href="/" className={styles.mainIcon}>PoSub</a>*/}
                    <Link to="/" className={styles.mainIcon}>PoSUB</Link>
                </nav>

                <nav>
                    <ul className={styles.list}>
                        {/* these links should show you how to connect up a link to a specific route */}

                        <li className={styles.listItem}>
                            {/*<a href="/seainfo6150-final-project-webapp/contact">About</a>*/}
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className={styles.listItem}>
                            {/*<a href="/seainfo6150-final-project-webapp/category">Category</a>*/}
                            <Link to="/category">Category</Link>
                        </li>

                    </ul>
                </nav>
            </header>


        </div>



    );

}

export default NaviBar;