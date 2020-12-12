import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import styles from './PostItem.module.css'

const PostItem = (props) => {

    return(

        <div className={styles.container}>
            <div className={styles.textPart}>
                {/*<h3><a href={'/posts/'+props.post.id}>{props.post.title}</a> - <span>{props.post.brand}</span></h3>*/}
                <h3><a href={'/posts/'+props.post.id}>{props.post.title}</a></h3>
                {/*<h3><a href={'/seainfo6150-final-project-webapp/posts/'+props.post.id}>{props.post.title}</a></h3>*/}

                <LinesEllipsis text={props.post.intro}
                               maxLine={2}
                               ellipsis='...'
                               trimRight basedOn='letters' />

                <p>{props.post.createDate} - {props.post.author}</p>
            </div>

            <div className={styles.imgPart}>
                <img src={props.post.image._url} alt={props.post.image.img_text}/>
            </div>
        </div>

    );

}

export default PostItem;