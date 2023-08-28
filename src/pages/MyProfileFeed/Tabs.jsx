import React, { useState } from "react";
import { grey, primary } from "../../theme/colors";
import { Posts } from "../../components/Posts/Posts";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { Box } from "@mui/material";
import { Info } from "./Tabs/Info";

const tabs = [
  {
    label: "Feed",
    icon: <FeedOutlinedIcon />,
  },
  {
    label: "Info",
    icon: <InfoOutlinedIcon />,
  },
  {
    label: "Jobs",
    icon: <BookmarkBorderOutlinedIcon />,
  },
  {
    label: "Bids",
    icon: <CheckBoxOutlinedIcon />,
  },
  {
    label: "Portfolio",
    icon: <ExtensionOutlinedIcon />,
  },
  {
    label: "Reviews",
    icon: <ThreePOutlinedIcon />,
  },
  {
    label: "Payment",
    icon: <PaymentOutlinedIcon />,
  },
];

const tabItems = [<Posts />, <Info />];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClickTab = (index) => setActiveTab(index);
  return (
    <div>
      <div className="user-tab-sec rewivew">
        <h3>John Doe</h3>
        <div className="star-descp">
          <span>Graphic Designer at Self Employed</span>
          <ul>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star-half-o"></i>
            </li>
          </ul>
          <a href="#" title="">
            Status
          </a>
        </div>
        <div className="tab-feed st2 settingjb">
          <ul>
            {tabs.map((tab, index) => (
              <li
                key={tab.label}
                onClick={() => handleClickTab(index)}
                className={index === activeTab ? "active" : ""}
              >
                <Box
                  sx={{
                    "& svg": {
                      mb: "4px",
                      width: 28,
                      height: 28,
                      cursor: "pointer",
                      color: index === activeTab ? primary[500] : grey[500],
                    },
                  }}
                >
                  {tab.icon}
                </Box>
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {tabItems[activeTab]}
    </div>
  );
};
