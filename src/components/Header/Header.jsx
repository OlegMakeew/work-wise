import React from "react";
import logo from "@/assets/images/logo.png";
import { UserAccount } from "./UserAccount/UserAccount";
import { Nav } from "./Nav/Nav";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-data">
          <div className="logo">
            <a href="index.html" title="">
              <img src={logo} alt="WorkWise" />
            </a>
          </div>
          <div className="search-bar">
            <form>
              <input type="text" name="search" placeholder="Search..." />
              <button type="submit">
                <i className="la la-search"></i>
              </button>
            </form>
          </div>
          <Nav />
          <div className="menu-btn">
            <a href="#" title="">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <UserAccount />
        </div>
      </div>
    </header>
  );
};
