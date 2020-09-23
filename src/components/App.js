import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
//Includes
import "../Assets/styles/App.css";
import "../Assets/scripts/main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/simple-business-website-template/" component={HomePage} />
        <Route exact path="/simple-business-website-template/what-we-do" component={ServicesPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
