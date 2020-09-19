import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplaySearch from "./pages/display-search/display-search";
import LandingPage from "./pages/landing/landing-page";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route
          path="/search/:slug"
          render={(props) => <DisplaySearch {...props} />}
        ></Route>
      </Switch>
    </Router>
  );
}
