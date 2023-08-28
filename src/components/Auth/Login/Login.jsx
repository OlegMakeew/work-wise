import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useLogin } from "hooks/useLogin";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../store/actions";

export const Login = ({ children }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, error } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await login(email, password);

    if (!error) {
      dispatch(setUserAction(user));
      return navigate("/");
    }
  };

  return (
    <div className="login-sec">
      {children && children}
      <div className="sign_in_sec">
        <Typography variant="h3">Sign in</Typography>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <i className="la">
                  <EmailIcon fontSize="12" />
                </i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <i className="la la-lock"></i>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="checky-sec">
                <div className="fgt-sec">
                  <input type="checkbox" name="cc" id="c1" />
                  <label htmlFor="c1">
                    <span></span>
                  </label>
                  <small>Remember me</small>
                </div>
                <a href="#" title="">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <button type="submit" value="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div className="login-resources">
          <h4>Login Via Social Account</h4>
          <ul>
            <li>
              <a href="#" title="" className="fb">
                <i className="fa fa-facebook"></i>Login Via Facebook
              </a>
            </li>
            <li>
              <a href="#" title="" className="tw">
                <i className="fa fa-twitter"></i>Login Via Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
