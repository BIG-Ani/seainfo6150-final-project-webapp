import React, { useState } from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";
import SubscribeForm from "../Form/SubscribeForm/SubscribeForm";
import SubForm from "../Form/SubForm/SubForm";
import HtmlText from "../HtmlText/HtmlText";

import styles from './PostDetailItem.module.css'
import SubToggleButton from "../Button/SubToggleButton";

const PostDetailItem = (props) => {

    const [showForm, setShowForm] = useState(false);

    const posts = props.posts;
    const postId = props.postId;

    const targetPost = posts.filter(post => post.id === postId)[0];
    console.log('targetPost', targetPost)

    function onClick() {
        setShowForm(!showForm);
    }

    let displayBody;
    if (showForm) {
        displayBody = (
            <div className={styles.bodySection}>

                <div>
                    <span>Intro:</span>
                    <HtmlText content={targetPost.intro} />
                </div>
                <SubForm />

            </div>
        )
    } else {
        displayBody = (
            <div className={styles.bodySection}>

                <div>
                    <HtmlText content={targetPost.content} />
                </div>
            </div>
        )
    }

    return(

        <div>
            <div>
                <NaviBar />

            </div>

            <div className={styles.postContainer}>

                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <img src={targetPost.image._url} alt={targetPost.title} />
                    </div>

                    <div className={styles.headerRight}>
                        <h2>{targetPost.title}</h2>
                        <p>{targetPost.author}</p>

                        <SubToggleButton
                            bottonText={showForm? "Unsubscribe" : "Subscribe"}
                            onClick={onClick}
                        />
                    </div>
                </div>

                {displayBody}

            </div>

        </div>

    );

}

export default PostDetailItem;