import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Page = ({ children, isLoading }) => {
  return (
    <Box>
      {isLoading ? (
        <Box
          position="absolute"
          left={0}
          top={0}
          bgcolor="#fff"
          height="100vh"
          width="100vw"
        >
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
        </Box>
      ) : (
        <Box>{children}</Box>
      )}
    </Box>
  );
};
