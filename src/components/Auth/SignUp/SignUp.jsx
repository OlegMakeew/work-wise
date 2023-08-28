import React, { useState } from "react";
import { useSignup } from "hooks/useSignup";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

export const SignUp = ({ children }) => {
  const { signup, error } = useSignup();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
    category: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!confirmed) return;

    await signup(form);

    if (!error) return navigate("/");
    console.log(error);
  };

  return (
    <div className="login-sec">
      {children && children}
      <div className="sign_in_sec">
        <Typography variant="h3">Sign Up</Typography>
        <div className="dff-tab current">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <i className="fa ">
                    <EmailIcon fontSize="12" />
                  </i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="country"
                    onChange={handleChange}
                    placeholder="Country"
                  />
                  <i className="la la-globe"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <select onChange={handleChange} name="category">
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </select>
                  <i className="la la-dropbox"></i>
                  <span>
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input
                      type="checkbox"
                      name="cc"
                      id="c2"
                      onChange={(e) => setConfirmed(e.target.value)}
                      value={confirmed}
                    />
                    <label htmlFor="c2">
                      <span></span>
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise Terms &
                      Conditions.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
