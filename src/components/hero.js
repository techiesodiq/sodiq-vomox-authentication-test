import React from "react";

import logo from "../assets/logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Sodiq React.js Authentication Test</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://reactjs.org/"
      >
        React.js
      </a>
    </p>
  </div>
);

export default Hero;
