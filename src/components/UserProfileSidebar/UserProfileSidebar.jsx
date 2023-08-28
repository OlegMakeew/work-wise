import { Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserProfileSidebarSkeleton } from "./UserProfileSidebarSkeleton";

export const UserProfileSidebar = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  return (
    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
      <div className="main-left-sidebar no-margin">
        {user && (
          <div className="user-data full-width">
            <div className="user-profile">
              <div className="username-dt">
                <div className="usr-pic">
                  <img width={110} height={110} src={user.photoURL} alt="" />
                </div>
              </div>
              <div className="user-specs">
                <h3>{user.displayName}</h3>
                <span>{user.role}</span>
              </div>
            </div>
            <ul className="user-fw-status">
              <li>
                <h4>Following</h4>
                <span>{user.following}</span>
              </li>
              <li>
                <h4>Followers</h4>
                <span>{user.followers}</span>
              </li>
              <li>
                <a href="my-profile.html" title="">
                  View Profile
                </a>
              </li>
            </ul>
          </div>
        )}
        {isLoading && <UserProfileSidebarSkeleton />}
        <div className="suggestions full-width">
          <div className="sd-title">
            <h3>Suggestions</h3>
            <i className="la la-ellipsis-v"></i>
          </div>
          <div className="suggestions-list">
            <div className="suggestion-usd">
              <img src="images/resources/s1.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="images/resources/s2.png" alt="" />
              <div className="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="images/resources/s3.png" alt="" />
              <div className="sgt-text">
                <h4>Poonam</h4>
                <span>Wordpress Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="images/resources/s4.png" alt="" />
              <div className="sgt-text">
                <h4>Bill Gates</h4>
                <span>C & C++ Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="images/resources/s5.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="images/resources/s6.png" alt="" />
              <div className="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="view-more">
              <a href="#" title="">
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="tags-sec full-width">
          <ul>
            <li>
              <a href="#" title="">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" title="">
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
          <div className="cp-sec">
            <img src="images/logo2.png" alt="" />
            <p>
              <img src="images/cp.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
