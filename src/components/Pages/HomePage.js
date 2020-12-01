import React, { Component } from "react";
//Components
import Services from "../Services/Services";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Carousel from "../Carousel/Carousel";
//Includes

class HomePage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Carousel />
        <WhoWeAre />
        <Services />
      </div>
    );
  }
}
export default HomePage;
