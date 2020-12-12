import React from 'react'
import {Link} from "react-router-dom";

import styles from './BrandList.module.css'

const BrandList = (props) => {

    console.log("values= " + props.brands);

    return(
        <div className={styles.container}>
            <h3>All Categories</h3>

            <ul className={styles.listContainer}>
                {props.brands.map(brand => (
                    <h4 className={styles.brandIcon} key={brand}><Link to={'/category/'+brand}>{brand}</Link></h4>
                    // <h4 className={styles.brandIcon} key={brand}><a href={'/seainfo6150-final-project-webapp/category/'+brand}>{brand}</a></h4>
                ))}
            </ul>

        </div>


    );

}

export default BrandList;