import React from 'react'
import NaviBar from "../../Bar/NaviBar/NaviBar";
import { Switch, Route, Link } from "react-router-dom";

import styles from "./Homepage.module.css"
import PostItem from "../../ListItem/PostItem";
import BrandList from "../../ListComponent/BrandList";
import Foo from "../../Foo/Foo";
import AboutPage from "../../About/About";
import Bar from "../../Bar/Bar";
import Baz from "../../Baz/Baz";
import Error from "../../Error/Error";
import DetailPost from "../../Detail/DetailPost";

const Homepage = (props) => {

    console.log("home page", typeof props.posts);

    let displayContent;

    if (props.posts.length) {
        displayContent = (
            <ul className={styles.textContainer}>
                {props.posts.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}

            </ul>
        );
    } else {
        displayContent = <div>You have no data!</div>;
    }

    const brandListContent = new Set();

    if (props.posts.length) {
        props.posts.map(post => (
            brandListContent.add(post.brand)
        ))
    }

    let brandList = [];
    brandListContent.forEach((key, value) => (
        brandList.push(value)
    ))

    console.log(brandList)

    return(
        <div className={styles.container}>
            <div>
                <NaviBar />
            </div>

            <div className={styles.bodyPart}>

                <div className={styles.leftPart}>
                    {displayContent}
                </div>

                {/*/!*todo: <description>*!/*/}
                {/*/!*<div className={styles.rightPart}>right part</div>*!/*/}

                <div className={styles.rightPart}>
                    <BrandList brands={brandList} posts={props.posts} />
                </div>
            </div>

        </div>

    );

}

export default Homepage;