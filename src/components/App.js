import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import HomePage from "./Pages/HomePage";
//Includes
import "../Assets/styles/App.css";
import "../Assets/scripts/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/simple-business-website-template/"
            component={HomePage}
          />
          <Route
            render={() => (
              <h1 className="text-center">Sorry, Page Not Found!</h1>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
