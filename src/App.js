import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Homepage from "./Home/Homepage/Homepage";
import AboutPage from "./About/About";
import CategoryList from "./ListComponent/CategoryList";
import PostDetailItem from "./ListItem/PostDetailItem";
import SingleCategoryList from "./ListComponent/SingleCategoryList";

const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article",
};

function App() {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            // const response = await fetch("https://5fc3f9f8e5c28f0016f54fc2.mockapi.io/api/v1/posts");
            const response = await fetch("https://run.mocky.io/v3/b0c97415-646e-4deb-be72-cb8c114afa21");
            const responseJson = await response.json();

            setFetchedData(Object.values(responseJson));
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);

    // console.log("fetched data:", fetchedData);

    return isEmpty(fetchedData) ? null : (
        <div className="App">
            <>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                    {/*<Route path="/seainfo6150-final-project-webapp" exact>*/}
                        <Homepage posts={fetchedData} />
                    </Route>

                    <Route path="/seainfo6150-final-project-webapp/foo" exact component={Foo} />

                    {/*<Route path="/contact" exact component={AboutPage} />*/}
                    <Route path="/contact" exact component={AboutPage} />

                    <Route
                        // path="/posts/:id"
                        path="/posts/:id"
                        exact
                        render={({ match }) => (
                            // getting the parameters from the url and passing
                            // down to the component as props
                            <PostDetailItem
                                postId={match.params.id}
                                posts={fetchedData}
                            />
                        )}
                    />

                    <Route
                        // path="/category/:brand"
                        path="/category/:brand"
                        exact
                        render={({ match }) => (
                            // getting the parameters from the url and passing
                            // down to the component as props
                            <SingleCategoryList
                                brand={match.params.brand}
                                posts={fetchedData}
                            />
                        )}
                    />

                    <Route
                        // path="/category"
                        path="/category"
                        exact>

                        <CategoryList posts={fetchedData} />
                    </Route>



                    <Route
                        path="/baz"
                        exact
                        render={() => <Baz content={externalContent} />}
                    />
                    <Route component={Error} />
                </Switch>
            </>
        </div>
    );
}

export default App;
