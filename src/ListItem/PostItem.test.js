import React from 'react'
import {render} from "@testing-library/react";
import PostItem from "./PostItem";

describe('post detail test', () => {

    it('render successfully ', () => {

        const post = {
            "id": "1",
            "title": "Netflix Android and iOS Studio Apps — now powered by Kotlin Multiplatform",
            "intro": "Over the last few years Netflix has been developing a mobile app called Prodicle to innovate in the physical production of TV shows and movies. The world of physical production is fast-paced, and needs vary significantly between the country, region, and even from one production to the next. The nature of the work means we’re developing write-heavy software, in a distributed environment, on devices where less than ⅓ of our users have very reliable connectivity whilst on set, and with a limited margin for error. For these reasons, as a small engineering team, we’ve found that optimizing for reliability and speed of product delivery is required for us to serve our evolving customers’ needs successfully.",
            "content": "<p>As noted earlier, our user needs vary significantly from one production to the next. This translates to a large number of app configurations to toggle feature availability and optimize the in-app experience for each production. Decoupling the code that manages these configurations from the apps themselves helps to reduce complexity as the apps grow. Our first exploration with code sharing involves the implementation of a mobile SDK for our internal experience management tool, Hendrix.</p> <p>At its core, Hendrix is a simple interpreted language that expresses how configuration values should be computed. These expressions are evaluated in the current app session context, and can access data such as A/B test assignments, locality, device attributes, etc. For our use-case, we’re configuring the availability of production, version, and region specific app feature sets.</p>",
            "author": "David Henry & Mel Yahya",
            "createDate": "Oct 28, 2020",
            "image": {
                "_url": "https://miro.medium.com/max/1400/1*ikCI36gKEUusNuV4NDrVyQ.png",
                "size": 123
            },
            "brand": "Netflix"
        };

        const {container} = render(<PostItem post={post} key={post.id} />);
        expect(container).toMatchSnapshot();
    });

})