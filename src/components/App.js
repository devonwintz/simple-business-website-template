import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Components
import HomePage from "./Pages/HomePage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

//Includes
import "../Assets/styles/App.css";
import "../Assets/scripts/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/simple-business-website-template/"
            component={HomePage}
          />
          <Redirect to="/simple-business-website-template/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
