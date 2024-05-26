import React from "react";
import './Home.css';
import Products from "./Products";

class Home extends React.Component {
    render() {
        return (
          <div className="h-screen bg-indigo-100">
            {/* <div>Hello, World</div> */}
            <Products></Products>
          </div>
          
        ) 
      }
}

export default Home;