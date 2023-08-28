import React from "react";
import homeIcon from "@/assets/images/icon1.png";
import companiesIcon from "@/assets/images/icon2.png";
import projectsIcon from "@/assets/images/icon3.png";
import profilesIcon from "@/assets/images/icon4.png";
import jobsIcon from "@/assets/images/icon5.png";
import { Notifications } from "./Notifications";
import { Messages } from "./Messages";
import { Link } from "react-router-dom";

export const Nav = ({ user }) => {
  return (
    <nav style={{ float: user ? "left" : "right" }}>
      <ul>
        <li>
          <a href="index.html" title="">
            <span>
              <img src={homeIcon} alt="Home" />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="companies.html" title="">
            <span>
              <img src={companiesIcon} alt="Companies" />
            </span>
            Companies
          </a>
          <ul>
            <li>
              <a href="companies.html" title="">
                Companies
              </a>
            </li>
            <li>
              <a href="company-profile.html" title="">
                Company Profile
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="projects.html" title="">
            <span>
              <img src={projectsIcon} alt="Projects" />
            </span>
            Projects
          </a>
        </li>
        {user && (
          <li>
            <a href="profiles.html" title="">
              <span>
                <img src={profilesIcon} alt="Profiles" />
              </span>
              Profiles
            </a>
            <ul>
              <li>
                <a href="user-profile.html" title="">
                  User Profile
                </a>
              </li>
              <li>
                <Link to="my-profile-feed" title="">
                  my-profile-feed
                </Link>
              </li>
            </ul>
          </li>
        )}
        <li>
          <a href="jobs.html" title="">
            <span>
              <img src={jobsIcon} alt="Jobs" />
            </span>
            Jobs
          </a>
        </li>
        {user && (
          <>
            <Messages />
            <Notifications />
          </>
        )}
      </ul>
    </nav>
  );
};
