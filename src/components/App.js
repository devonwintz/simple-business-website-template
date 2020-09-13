import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import Carousel from "./Carousel/Carousel";
//Includes
import "../Assets/styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Carousel />
        <Route exact path="/simple-business-website-template/" component={HomePage} />
        <Route exact path="/simple-business-website-template/services" component={ServicesPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
