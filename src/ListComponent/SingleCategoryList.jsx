import React from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";
import CategoryItem from "../ListItem/CategoryItem";
import LinesEllipsis from "react-lines-ellipsis";

import styles from './SingleCategoryList.module.css'

const SingleCategoryList = (props) => {

    const brand = props.brand;
    const posts = props.posts

    console.log('single list', brand)
    console.log('single list', posts)

    return(

        <div>

            <div>
                <NaviBar />
            </div>


            <div className={styles.listContainer}>
                <h1>{brand}</h1>

                <ul>
                    {posts
                        .filter(post => post.brand === brand)
                        .map(post => (
                            <div className={styles.postContainer}>
                                {/*<h2><a href={'/seainfo6150-final-project-webapp/posts/:'+post.id}>{post.title}</a></h2>*/}
                                {/*<h2 className={styles.postTitle}><a href={'/seainfo6150-final-project-webapp/posts/'+post.id}>{post.title}</a></h2>*/}
                                <h2 className={styles.postTitle}><a href={'/posts/'+post.id}>{post.title}</a></h2>

                                <p>{post.author}</p>

                                <div>
                                    <LinesEllipsis text={post.intro}
                                                   maxLine={3}
                                                   ellipsis='...'
                                                   trimRight basedOn='letters' />
                                </div>
                            </div>
                        ))

                    }
                </ul>
            </div>

        </div>

    );

}

export default SingleCategoryList;