import { Box, Skeleton } from "@mui/material";
import React from "react";

export const UserProfileSidebarSkeleton = () => {
  return (
    <Box mb={2.5} bgcolor="white" className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <Box
              bgcolor="#fff"
              width={110}
              height={110}
              borderRadius="50%"
              margin="auto"
              border="5px solid #fff"
              boxSizing="border-box"
            >
              <Skeleton variant="circular" width="100%" height="100%" />
            </Box>
          </div>
        </div>
        <div className="user-specs">
          <Skeleton sx={{ margin: "0 auto" }} width="50%" height={25} />
          <Skeleton sx={{ margin: "0 auto" }} width="80%" height={25} />
        </div>
      </div>
      <ul className="user-fw-status">
        <li>
          <Skeleton sx={{ margin: "0 auto" }} width={80} height={25} />
          <Skeleton sx={{ margin: "0 auto" }} width="50%" height={25} />
        </li>
        <li>
          <Skeleton sx={{ margin: "0 auto" }} width={80} height={25} />
          <Skeleton sx={{ margin: "0 auto" }} width="50%" height={25} />
        </li>
        <li>
          <Skeleton sx={{ margin: "0 auto" }} width="25%" height={25} />
        </li>
      </ul>
    </Box>
  );
};
