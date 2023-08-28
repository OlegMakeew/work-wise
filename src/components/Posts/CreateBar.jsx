import React, { useState } from "react";
import userImage from "@/assets/images/resources/user-pic.png";
import { CreateJobPopup } from "./CreateJobPopup";
import { CreateProjectPopup } from "./CreateProjectPopup";

export const CreateBar = () => {
  return (
    <div className="post-topbar">
      <div className="user-picy">
        <img src={userImage} alt="" />
      </div>
      <div className="post-st">
        <ul>
          <li>
            <a className="post_project" href="#" title="">
              Post a Project
            </a>
          </li>
          <li>
            <a className="post-jb active" href="#" title="">
              Post a Job
            </a>
          </li>
        </ul>
      </div>
      <CreateJobPopup />
      <CreateProjectPopup />
    </div>
  );
};