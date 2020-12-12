import React from 'react';
import NaviBar from "../Bar/NaviBar/NaviBar";

import styles from './DetailPost.module.css';

const DetailPost = (props) => {

    return(

        <div className={styles.container}>

            <nav>
                <NaviBar />
            </nav>

            <div className={styles.bodyPart}>
                {props.posts
                    .filter(id => id === props.id)
                    .map(post => (
                        <p>{post.content}</p>
                    ))
                }
            </div>

        </div>

    );

}

export default DetailPost;