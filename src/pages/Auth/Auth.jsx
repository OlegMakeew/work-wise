import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Login } from "../../components/Auth/Login/Login";
import logo from "images/cm-logo.png";
import mainImg from "images/cm-main-img.png";
import copyImg from "images/copy-icon.png";
import { SignUp } from "../../components/Auth/SignUp/SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
  },
}));

const AuthTabsController = ({ showLogin, setShowLogin }) => (
  <ul className="sign-control">
    <li className={showLogin ? "current" : ""}>
      <a href="#" onClick={() => setShowLogin(true)}>
        Sign in
      </a>
    </li>
    <li className={!showLogin ? "current" : ""}>
      <a href="#" onClick={() => setShowLogin(false)}>
        Sign up
      </a>
    </li>
  </ul>
);

export const Auth = ({ user }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user]);

  return (
    <Box className={classes.root}>
      <div className="sign-in-page">
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-lg-6">
                <div className="cmp-info">
                  <div className="cm-logo">
                    <img src={logo} alt="WorkWise" />
                    <p>
                      Workwise, is a global freelancing platform and social
                      networking where businesses and independent professionals
                      connect and collaborate remotely
                    </p>
                  </div>
                  <img src={mainImg} alt="Notes" />
                </div>
              </div>
              <div className="col-lg-6">
                {showLogin ? (
                  <Login>
                    <AuthTabsController
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                    />
                  </Login>
                ) : (
                  <SignUp>
                    <AuthTabsController
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                    />
                  </SignUp>
                )}
              </div>
            </div>
          </div>
          <div className="footy-sec">
            <div className="container">
              <ul>
                <li>
                  <a href="help-center.html" title="">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="about.html" title="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Career
                  </a>
                </li>
                <li>
                  <a href="forum.html" title="">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Language
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Copyright Policy
                  </a>
                </li>
              </ul>
              <p>
                <img src={copyImg} alt="Copyright" />
                Copyright 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
