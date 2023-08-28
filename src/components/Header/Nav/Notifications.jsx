import React from "react";
import notificationIcon from "@/assets/images/icon7.png";
import userMessageImage from "@/assets/images/resources/ny-img3.png";

export const Notifications = () => {
  return (
    <li>
      <a href="#" title="" className="not-box-open">
        <span>
          <img src={notificationIcon} alt="" />
        </span>
        Notification
      </a>
      <div className="notification-box noti" id="notification">
        <div className="nt-title">
          <h4>Setting</h4>
          <a href="#" title="">
            Clear all
          </a>
        </div>
        <div className="nott-list">
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="#" title="">
                  Jassica William
                </a>{" "}
                Comment on your project.
              </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="#" title="">
                  Jassica William
                </a>{" "}
                Comment on your project.
              </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="#" title="">
                  Jassica William
                </a>{" "}
                Comment on your project.
              </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="#" title="">
                  Jassica William
                </a>{" "}
                Comment on your project.
              </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="view-all-nots">
            <a href="#" title="">
              View All Notification
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
