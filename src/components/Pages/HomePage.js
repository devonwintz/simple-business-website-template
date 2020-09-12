import React, { Component } from "react";
//Components
//Includes

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          This is our <span style={{ fontWeight: "bold" }}>Home </span>page
        </div>
        <div className="slider"></div>
      </div>
    );
  }
}
export default HomePage;
