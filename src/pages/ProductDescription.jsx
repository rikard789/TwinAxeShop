import React from "react";
import './ProductDescription.css';
import Description from "./Description";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="h-screen">
                {/* <div>Hello, World</div> */}
                <Description></Description>
            </div>

        )
    }
}

export default Home;