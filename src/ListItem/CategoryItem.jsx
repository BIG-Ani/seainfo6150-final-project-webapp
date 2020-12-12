import React from 'react'
import LinesEllipsis from "react-lines-ellipsis";

import styles from './CategoryItem.module.css'

const CategoryItem = (props) => {

    const posts = props.posts;
    const brand = props.brand;

    console.log('brand', brand)
    console.log('posts', posts)

    return(

        <>
            {/*<h2 className={styles.brandTitle}><a href={'/seainfo6150-final-project-webapp/category/'+brand}>{brand}</a></h2>*/}
            <h2 className={styles.brandTitle}><a href={'/category/'+brand}>{brand}</a></h2>

            <div className={styles.brandContainer}>
                {posts
                    .filter((post) => post.brand === brand)
                    .map((post) => (
                        <div className={styles.Post} key={post.id}>
                            {/*<h3><a href={'/seainfo6150-final-project-webapp/posts/'+post.id}>{post.title}</a></h3>*/}
                            <h3><a href={'/posts/'+post.id}>{post.title}</a></h3>

                            <p>- {post.author}</p>
                            <div>
                                <LinesEllipsis text={post.intro}
                                               maxLine={3}
                                               ellipsis='...'
                                               trimRight basedOn='letters' />
                            </div>

                        </div>

                    ))}


            </div>
        </>

    );

}

export default CategoryItem;