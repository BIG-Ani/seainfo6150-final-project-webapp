import React from 'react'
import {Link} from "react-router-dom";

import styles from './BrandList.module.css'

const BrandList = (props) => {

    return(
        <div className={styles.container}>
            <h3>All Categories</h3>

            <ul className={styles.listContainer}>
                {props.brands.map(brand => (
                    <h4 className={styles.brandIcon} key={brand}><Link to={'/category/'+brand}>{brand}</Link></h4>
                ))}
            </ul>

        </div>


    );

}

export default BrandList;