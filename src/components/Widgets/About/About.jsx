import React from "react";
import wdLogo from "images/wd-logo.png";

export const About = () => {
  return (
    <div className="widget widget-about">
      <img src={wdLogo} alt="Workwise" />
      <h3>Track Time on Workwise</h3>
      <span>Pay only for the Hours worked</span>
      <div className="sign_link">
        <h3>
          <a href="sign-in.html" title="">
            Sign up
          </a>
        </h3>
        <a href="#" title="">
          Learn More
        </a>
      </div>
    </div>
  );
};
