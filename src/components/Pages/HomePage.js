import React, { Component } from "react";
//Components
import Services from "../Services/Services";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//Includes

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Carousel />
        <WhoWeAre />
        <Services />
        <Footer />
      </div>
    );
  }
}
export default HomePage;
