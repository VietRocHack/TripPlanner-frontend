import React from "react";
import { Box, Typography } from "@mui/material";

interface CatchphraseProps{
  fontSizeMobile?: string,
  fontSizeDesktop?: string,
}


const Catchphrase: React.FC = ({fontSizeMobile="2.8rem", fontSizeDesktop="3rem"}: CatchphraseProps) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            position: "relative",
            top: 0,
            left: 0,
            width: "calc(100% + 6px)",
            wordWrap: "break-word",

            color: "#2AF0EA80",
            fontSize: {
              xs: fontSizeMobile,
              sm: fontSizeMobile,
              md: fontSizeDesktop,
              lg: fontSizeDesktop,
              xl: fontSizeDesktop,
            },
          }}
        >
          Discover your perfect getaway.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            top: "3px",
            left: "3px",
            width: "calc(100% + 6px)",
            wordWrap: "break-word",
            color: "#FE285880",
            fontSize: {
              xs: fontSizeMobile,
              sm: fontSizeMobile,
              md: fontSizeDesktop,
              lg: fontSizeDesktop,
              xl: fontSizeDesktop,
            },
          }}
        >
          Discover your perfect getaway.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            top: "1.5px",
            left: "1.5px",
            width: "calc(100% + 6px)",
            wordWrap: "break-word",
            color: "white",
            fontSize: {
              xs: fontSizeMobile,
              sm: fontSizeMobile,
              md: fontSizeDesktop,
              lg: fontSizeDesktop,
              xl: fontSizeDesktop,
            },
          }}
        >
          Discover your perfect getaway.
        </Typography>
      </Box>
    </>
  );
};

export default Catchphrase;