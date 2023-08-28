import React from "react";
import messagesIcon from "@/assets/images/icon6.png";
import userMessageImage from "@/assets/images/resources/ny-img3.png";

export const Messages = () => {
  return (
    <li>
      <a href="#" title="" className="not-box-openm">
        <span>
          <img src={messagesIcon} alt="Messages" />
        </span>
        Messages
      </a>
      <div className="notification-box msg" id="message">
        <div className="nt-title">
          <h4>Setting</h4>
          <a href="#" title="">
            Clear all
          </a>
        </div>
        <div className="nott-list">
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="Notification" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </p>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src={userMessageImage} alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              <span>2 min ago</span>
            </div>
          </div>
          <div className="view-all-nots">
            <a href="messages.html" title="">
              View All Messsages
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
