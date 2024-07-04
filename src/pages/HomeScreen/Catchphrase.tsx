import React from "react";
import { Box, Typography } from "@mui/material";

const Catchphrase: React.FC = () => {
    return (
      <>
        <Box
          sx={{
            display: "block",
            position: "relative",
            height: "100px",
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

              color: "#2AF0EA80",
              fontSize: {
                xs: "3rem",
                sm: "3rem",
                md: "2.9rem",
                lg: "3.5rem",
                xl: "4rem",
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
              color: "#FE285880",
              fontSize: {
                xs: "3rem",
                sm: "3rem",
                md: "2.9em",
                lg: "3.5rem",
                xl: "4rem",
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
              color: "white",
              fontSize: {
                xs: "3rem",
                sm: "3rem",
                md: "2.9rem",
                lg: "3.5rem",
                xl: "4rem",
              },
            }}
          >
            Discover your perfect getaway.
          </Typography>
        </Box>
      </>
    );
}

export default Catchphrase;