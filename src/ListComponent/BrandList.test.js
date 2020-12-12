import React from 'react'
import {render} from "@testing-library/react";
import BrandList from "./BrandList";

describe('brand list test', () => {

    it('render successfully ', () => {

        const brandList = [];
        const posts = [
            {
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
            },
            {
                "id": "2",
                "title": "How Netflix Scales its API with GraphQL Federation (Part 1)",
                "intro": "Netflix is known for its loosely coupled and highly scalable microservice architecture. Independent services allow for evolving at different paces and scaling independently. Yet they add complexity for use cases that span multiple services. Rather than exposing 100s of microservices to UI developers, Netflix offers a unified API aggregation layer at the edge.",
                "content": "<p>Looking back to a few years ago, one of the pains in the studio space was the growing complexity of the data and its relationships. The workflows depicted above are inherently connected but the data and its relationships were disparate and existed in myriads of microservices. The product teams solved for this with two architectural patterns.</p>",
                "author": "Tejas Shikhare",
                "createDate": "Nov 9, 2020",
                "image": {
                    "_url": "https://miro.medium.com/max/1400/0*UfiYCmNd3EN_vNkh",
                    "size": 123
                },
                "brand": "Netflix"
            },
            {
                "id": "3",
                "title": "Using Memorystore with Cloud Run",
                "intro": "Google’s Memorystore service provides a fully managed Redis environment. Cloud Run provides a fully managed container hosting environment with automatic scaling. This opens up the opportunity to design solutions hosted by Cloud Run that leverage the services of Memorystore. In this article we will examine what is involved to set that up.",
                "content": "<p>Google’s Memorystore service provides a fully managed Redis environment. Cloud Run provides a fully managed container hosting environment with automatic scaling. This opens up the opportunity to design solutions hosted by Cloud Run that leverage the services of Memorystore. In this article we will examine what is involved to set that up.</p> <p>Whenever we create a Memorystore instance, it will be given a private IP address that will be visible to a single VPC network. Further, Memorystore only permits connections from resources that are contained within the same region. This provides immediate access to Memorystore from Compute Engines in the same region/VPC using VPC peering:</p>",
                "author": "Neil Kolban",
                "createDate": "Jul 21, 2020",
                "image": {
                    "_url": "https://miro.medium.com/fit/c/400/266/0*eCD-C_aF_kcTR8KH",
                    "size": 123
                },
                "brand": "Google"
            },
            {
                "id": "4",
                "title": "What I learned about WebSockets by building a real-time chat application using Socket.IO.",
                "intro": "In this article, I take a deep-dive into the world of WebsSockets, looking at the history of HTTP and the web and the use of WebSockets on the modern Web. I also list 16 steps to building your own real-time chat application, allowing you to gain hands-on experience with this powerful technology. I highly encourage that those with a basic grasp of web development take 20 minutes to follow along. The project uses Node.js, some vanilla JavaScript and a pre-built front-end. https://medium.com/@jamesbrown5292/what-i-learned-about-websockets-by-building-a-real-time-chat-application-using-socket-io-3d9e163e504",
                "content": "<p>In this article, I take a deep-dive into the world of WebsSockets, looking at the history of HTTP and the web and the use of WebSockets on the modern Web. I also list 16 steps to building your own real-time chat application, allowing you to gain hands-on experience with this powerful technology. I highly encourage that those with a basic grasp of web development take 20 minutes to follow along. The project uses Node.js, some vanilla JavaScript and a pre-built front-end.</p> <p>HTTP 1.0 and the early web Hypertext Transfer Protocol (HTTP) is the set of rules and information systems that first enabled data transfer across the web. In short, HTTP 1.0 involved a request response cycle between client and server. There are a few important things to note about HTTP 1.0 and the request-response cycle.</p>",
                "author": "James Brown",
                "createDate": "Oct 18, 2020",
                "image": {
                    "_url": "https://miro.medium.com/fit/c/400/266/1*jTmCp3L3eVEG4fokeuqQZQ.png",
                    "size": 123
                },
                "brand": "Lighthouse Labs"
            },
            {
                "id": "5",
                "title": "How To Alleviate Single Points of Failure in a Critical Service, Featuring the Kardashians",
                "intro": "At Compass, we can fetch listing data by either loading records with specific identifiers or searching for records that match a query. So what do we do when an external service tightly couples these paths that should operate independently of one another? Unnecessary bottlenecks, resource depletion, and down times. All in all, not a good look. But, let’s find a solution with the help of the Kardashians.https://medium.com/compass-true-north/how-to-alleviate-single-points-of-failure-in-a-critical-service-featuring-the-kardashians-f51d69dc6841",
                "content": "<p>At Compass, we can fetch listing data by either loading records with specific identifiers or searching for records that match a query. So what do we do when an external service tightly couples these paths that should operate independently of one another? Unnecessary bottlenecks, resource depletion, and down times. All in all, not a good look. But, let’s find a solution with the help of the Kardashians.</p> <p>The Listing Translation Service (LTS, owned by us, the Listing Apps team) renders data for display and fetches it either directly from the database or from the Elasticsearch cluster. This setup has proved problematic, however, as we were setting ourselves up for an undesirable situation where if the database was unresponsive, so are the endpoints in the LTS that are clients of the search service, and vice versa. On top of that, the LTS’s endpoint to use search became the main API to access it, even though all functionality is essentially maintained by a separate Search team. This became especially apparent when the search service was exhibiting errors of any kind and we would get paged for its exposed API in the LTS — our hands were tied until that owning team addressed it.</p>",
                "author": "Sana Sheikh",
                "createDate": "Sep 29, 2020",
                "image": {
                    "_url": "https://miro.medium.com/max/1400/0*_BAj6eDmwf9xF_-d",
                    "size": 123
                },
                "brand": "Compass True North"
            },
            {
                "id": "6",
                "title": "Google Cloud SQL — Tips & Tricks",
                "intro": "When creating a new Cloud SQL instance… Ensure that the instance name is picked wisely. You may find it helpful if it remains short, and contains the Cloud SQL edition (MySQL, PostgreSQL, SQL Server) and version number. For example, pg12.https://medium.com/@koistya/google-cloud-sql-tips-tricks-d0fe7106c68a",
                "content": "<p>When creating a new Cloud SQL instance… Ensure that the instance name is picked wisely. You may find it helpful if it remains short, and contains the Cloud SQL edition (MySQL, PostgreSQL, SQL Server) and version number. For example, pg12.</p> <p>Down the road, when you’ll be upgrading it to the newer version, you would create a separate Cloud SQL instance (e.g. pg14) backup data from the previous database instance and restore it in the new one. Note that renaming a Cloud SQL instance (ID) is not possible, as well as changing its region. When you delete a Cloud SQL instance, you will not be able to create a new instance with the same name, at least not within the next couple of months.</p>",
                "author": "Konstantin Tarkus",
                "createDate": "Sep 6, 2020",
                "image": {
                    "_url": "https://miro.medium.com/max/1400/1*d8WezOUjUDt5lwAVA0FhDA.jpeg",
                    "size": 123
                },
                "brand": "Google"
            },
            {
                "id": "7",
                "title": "Designing Edge Gateway, Uber’s API Lifecycle Management Platform",
                "intro": "In October 2014, Uber had started its journey of scale in what would eventually turn out to be one of the most impressive growth phases in the company. Over time we were scaling our engineering teams non-linearly each month and acquiring millions of users across the world.https://eng.uber.com/gatewayuberapi/",
                "content": "<p>In October 2014, Uber had started its journey of scale in what would eventually turn out to be one of the most impressive growth phases in the company. Over time we were scaling our engineering teams non-linearly each month and acquiring millions of users across the world.</p> <p>In this article, we will go through the different phases of the evolution of Uber’s API gateway that powers Uber products. We will walk through history to understand the evolution of architectural patterns that occurred alongside this breakneck growth phase. We will speak of this evolution over three generations of the gateway systems, exploring their challenges and their responsibilities. </p>",
                "author": "Madan Thangavelu, Uday Kiran Medisetty, and Pavel Astakhov",
                "createDate": "August 18, 2020",
                "image": {
                    "_url": "https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/unnamed-3.png",
                    "size": 123
                },
                "brand": "Uber"
            },
            {
                "id": "8",
                "title": "Revolutionizing Money Movements at Scale with Strong Data Consistency",
                "intro": "Uber as a platform invites its users to leverage it, earn from it, and be delighted by it. Serving more than 18 million requests per day, in 10,000+ cities, has enabled people to move freely and to think broadly while earning a livelihood on it. As one of the underlying engines, Uber Money fulfills some of the most important aspects of people’s engagement in the Uber experience. A system like this should not only be robust, but should also be highly available with zero-tolerance to downtime, after our success mantra: “To collect and disburse on-time, accurately and in-compliance”.https://eng.uber.com/money-scale-strong-data/",
                "content": "<p>Uber as a platform invites its users to leverage it, earn from it, and be delighted by it. Serving more than 18 million requests per day, in 10,000+ cities, has enabled people to move freely and to think broadly while earning a livelihood on it. As one of the underlying engines, Uber Money fulfills some of the most important aspects of people’s engagement in the Uber experience. A system like this should not only be robust, but should also be highly available with zero-tolerance to downtime, after our success mantra: “To collect and disburse on-time, accurately and in-compliance”.</p> <p>While we expand to multiple lines of businesses, and strategize the next best, the engineers in Uber Money also thrive on building the next generation’s Payments Platform which extends Uber’s growth. In this blog, we introduce you to this platform and provide insights into our learnings. This includes migrating hundreds of millions customers between two asynchronous systems while maintaining data-consistency with a goal of zero impact on our users.</p>",
                "author": "Aakriti Singla and Simon Wu",
                "createDate": "October 2, 2020",
                "image": {
                    "_url": "https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/unnamed-1536x812.png",
                    "size": 123
                },
                "brand": "Uber"
            },
            {
                "id": "9",
                "title": "Tricks of the Trade: Tuning JVM Memory for Large-scale Services",
                "intro": "Running queries on Uber’s data platform lets us make data-driven decisions at every level, from forecasting rider demand during high traffic events to identifying and addressing bottlenecks in the driver sign-up process. Our Apache Hadoop-based data platform ingests hundreds of petabytes of analytical data with minimum latency and stores it in a data lake built on top of the Hadoop Distributed File System (HDFS). https://eng.uber.com/jvm-tuning-garbage-collection/",
                "content": "<p>Running queries on Uber’s data platform lets us make data-driven decisions at every level, from forecasting rider demand during high traffic events to identifying and addressing bottlenecks in the driver sign-up process. Our Apache Hadoop-based data platform ingests hundreds of petabytes of analytical data with minimum latency and stores it in a data lake built on top of the Hadoop Distributed File System (HDFS).</p> <p>Our data platform leverages several open source projects (Apache Hive, Apache Presto, and Apache Spark) for both interactive and long running queries, serving the myriad needs of different teams at Uber. All of these services were built in Java or Scala and run on open source Java Virtual Machine (JVM).</p>",
                "author": "Xinli Shang, Yi Zhang, Fengnan Li, Amruth Sampath, and Girish Baliga",
                "createDate": "February 26, 2020",
                "image": {
                    "_url": "https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/JVM_tuning_feature_image.png",
                    "size": 123
                },
                "brand": "Uber"
            },
            {
                "id": "10",
                "title": "Advanced Technologies for Detecting and Preventing Fraud at Uber",
                "intro": "Fraud has a direct impact on Uber as well as user experiences on the platform. To combat bad actors,  Uber has a dedicated team of anti-fraud analysts, data scientists, and UX experts who work collaboratively on this issue. As part of this effort, we build internal services that help us continually monitor and respond to changes in the ever-evolving fraud landscape.https://eng.uber.com/advanced-technologies-detecting-preventing-fraud-uber/",
                "content": "<p>Fraud has a direct impact on Uber as well as user experiences on the platform. To combat bad actors,  Uber has a dedicated team of anti-fraud analysts, data scientists, and UX experts who work collaboratively on this issue. As part of this effort, we build internal services that help us continually monitor and respond to changes in the ever-evolving fraud landscape.</p> <p>These services look for errant behaviors, actions that would not have been taken by legitimate users. Using our fraud fighting technologies, we can, for instance, differentiate between actual trips and those created by GPS spoofing, or analyze how our apps are being used to reveal fraudsters.  </p>",
                "author": "Ting Chen",
                "createDate": "June 14, 2018",
                "image": {
                    "_url": "https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Fraud_Feature.jpg",
                    "size": 123
                },
                "brand": "Uber"
            },
            {
                "id": "11",
                "title": "Labs Interns | Machine learning project template",
                "intro": "The goal of my internship project was to create a structured way to evaluate machine learning/data science project ideas. I created a machine learning project template to help Concur Labs to prioritize and evaluate the existing as well as potential ML projects. The target users of this ML project template are all the ML project stakeholders, residents of Concur Labs’ internal residency program, and Concur employees who have an ML project idea.https://blog.concurlabs.com/labs-interns-machine-learning-project-template-8ec9913c892",
                "content": "<p>The goal of my internship project was to create a structured way to evaluate machine learning/data science project ideas. I created a machine learning project template to help Concur Labs to prioritize and evaluate the existing as well as potential ML projects. The target users of this ML project template are all the ML project stakeholders, residents of Concur Labs’ internal residency program, and Concur employees who have an ML project idea.</p> <p>I can’t share the whole machine learning project template and the details of the ML project prioritization results. But I can share some interesting questions I listed on the ML project template!</p>",
                "author": "Jeffrey (Che-An) Wu",
                "createDate": "Aug 23, 2019",
                "image": {
                    "_url": "https://miro.medium.com/max/1400/1*U0WxfUKAOYE92iqgTOQQjQ.png",
                    "size": 123
                },
                "brand": "Concur Labs"
            },
            {
                "id": "12",
                "title": "GCP API Gateway Demo with Terraform / Go / Cloud Run",
                "intro": "If you’ve been building web services on GCP Cloud Functions or Cloud Run, then you might have noticed that Google Cloud has been missing an important piece of infrastructure: an API Gateway.https://didil.medium.com/gcp-api-gateway-demo-with-terraform-go-cloud-run-f76148328e06",
                "content": "<p>If you’ve been building web services on GCP Cloud Functions or Cloud Run, then you might have noticed that Google Cloud has been missing an important piece of infrastructure: an API Gateway.</p> <p>While AWS has had its Amazon API Gateway for a few years now, GCP had no equivalent service (there was Cloud Endpoints but I think the scope is a bit different), leaving developers to build custom solutions … But not anymore ! GCP has recently announced the brand new Google Cloud API Gateway, so I thought I’ll give it a try. It’s still in beta so do take that into consideration before using it in your production systems.</p>",
                "author": "Adil H",
                "createDate": "Sep 23, 2019",
                "image": {
                    "_url": "https://miro.medium.com/max/1400/1*CuywLc7oZDCU_MlN2Geqag.png",
                    "size": 123
                },
                "brand": "Google"
            }
        ];

        const {container} = render( <BrandList brands={brandList} posts={posts} />);
        expect(container).toMatchSnapshot();
    });

})