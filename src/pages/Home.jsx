import React from "react";
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   email: '',
    //   password: ''
    // };
  }
    render() {
        return (
          <div class="h-screen bg-indigo-100">
            <div>Hello, World</div>
          </div>
          
        ) 
      }
}

export default Home;