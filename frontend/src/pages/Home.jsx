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
                <Products addToCart={this.props.addToCart} />
            </div>
        )
    }
}

export default Home;
