import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import NaviBar from "../Bar/NaviBar/NaviBar";

const Home = () => {
    return (
        <div>
            <NaviBar/>
            <p>The home page</p>

            <h1>I changed this homepage</h1>
            <img src={treefrog} alt="tree frog" />
            <Form />
        </div>
    )
}

export default Home
