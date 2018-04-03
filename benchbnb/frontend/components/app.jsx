import React from "react";
import { Route } from "react-router";
import { AuthRoute, loggedIn } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LoginForm from "./session_form/login_form_container";
import SignupForm from "./session_form/signup_form_container";
import SearchContainer from "./search_container";

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginForm} />
    <AuthRoute exact path="/signup" component={SignupForm} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
