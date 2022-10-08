import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
