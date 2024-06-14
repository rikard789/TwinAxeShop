import React from "react";
import './Home.css';
import Products from "./Products";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="h-screen">
                {/* <div>Hello, World</div> */}
                <Products></Products>
            </div>

        )
    }
}

export default Home;