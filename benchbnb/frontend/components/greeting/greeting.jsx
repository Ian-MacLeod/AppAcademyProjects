import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  let greetingButtons;
  if (currentUser === null) {
    greetingButtons = (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  } else {
    greetingButtons = (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
  return <div>{greetingButtons}</div>;
};

export default Greeting;
