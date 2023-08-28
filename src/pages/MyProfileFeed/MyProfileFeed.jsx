import React from "react";
import coverImg from "images/resources/cover-img.jpg";
import { useStorage } from "hooks/useStorage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Page } from "components/Page/Page";
import { Tabs } from "./Tabs";

export const MyProfileFeed = () => {
  const theme = useTheme();
  const { user } = useSelector(({ auth }) => auth);
  const [fileUrl, setFileUrl] = useState();
  const [coverFileUrl, setCoverFileUrl] = useState();
  const [isCoverLoading, setIsCoverLoading] = useState(false);
  const { updateProfileImage, updateCoverImage } = useStorage();

  const imageTypes = ["jpeg", "jpg", "png", "svg"];

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    if (user && file && file.type.includes(imageTypes)) {
      const res = await updateProfileImage(file);
      setFileUrl(res);
    }
  };

  const handleChangeCoverImage = async (e) => {
    const file = e.target.files[0];
    if (user && file) {
      setIsCoverLoading(true);
      const res = await updateCoverImage(file);
      setCoverFileUrl(res);
      setIsCoverLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.coverImage) {
      setCoverFileUrl(user.coverImage);
    }
  }, [user]);

  return (
    <Page isLoading={!user && !coverFileUrl}>
      <section className="cover-sec">
        <label
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
          htmlFor="cover-file"
        >
          <Box
            height="100%"
            sx={{
              background: coverImg,
              minHeight: 400,
              [theme.breakpoints.down(1000)]: { minHeight: 200 },
            }}
          >
            {coverFileUrl && (
              <Box
                component="img"
                src={coverFileUrl}
                alt="Cover Image"
                sx={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                width="100%"
                height="100%"
                maxHeight={400}
              />
            )}
          </Box>

          {isCoverLoading && (
            <>
              <CircularProgress
                size={80}
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  left: "46%",
                  top: "40%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <Box
                component="span"
                height="100%"
                width="100%"
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  background: "rgba(0,0,0,0.7)",
                }}
              />
            </>
          )}

          <div className="add-pic-box">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="file"
                    id="cover-file"
                    onChange={handleChangeCoverImage}
                    disabled={isCoverLoading}
                  />
                  <label htmlFor="cover-file">Change Image</label>
                </div>
              </div>
            </div>
          </div>
        </label>
      </section>
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-lg-3">
                  <div className="main-left-sidebar">
                    <Box className="user_profile">
                      <Box className="user-pro-img">
                        <label
                          htmlFor="profile-image"
                          style={{ cursor: "pointer" }}
                        >
                          <Box
                            component="img"
                            src={fileUrl ?? user?.photoURL}
                            alt={user?.displayName}
                            sx={{
                              height: "calc(180 / 1440 * 100vw)",
                              width: "calc(180 / 1440 * 100vw)",
                              maxWidth: 180,
                              maxHeight: 180,
                              minHeight: 140,
                              minWidth: 140,
                            }}
                          />
                        </label>
                        <div className="add-dp" id="OpenImgUpload">
                          <input
                            type="file"
                            id="profile-image"
                            onChange={handleChangeImage}
                          />
                          <label htmlFor="profile-image">
                            <i className="fa fa-camera"></i>
                          </label>
                        </div>
                      </Box>
                      <div className="user_pro_status">
                        <ul className="flw-status">
                          <li>
                            <span>Following</span>
                            <b>34</b>
                          </li>
                          <li>
                            <span>Followers</span>
                            <b>155</b>
                          </li>
                        </ul>
                      </div>
                      <ul className="social_links">
                        <li>
                          <a href="#" title="">
                            <i className="la la-globe"></i> www.example.com
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-facebook-square"></i>{" "}
                            Http://www.facebook.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-twitter"></i>{" "}
                            Http://www.Twitter.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-google-plus-square"></i>{" "}
                            Http://www.googleplus.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-behance-square"></i>{" "}
                            Http://www.behance.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-pinterest"></i>{" "}
                            Http://www.pinterest.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-instagram"></i>{" "}
                            Http://www.instagram.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-youtube"></i>{" "}
                            Http://www.youtube.com/john...
                          </a>
                        </li>
                      </ul>
                    </Box>
                    <div className="suggestions full-width">
                      <div className="sd-title">
                        <h3>People Viewed Profile</h3>
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
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-ws-sec">
                    <Tabs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
};
