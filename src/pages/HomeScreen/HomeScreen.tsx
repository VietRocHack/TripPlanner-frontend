import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Container,
} from "@mui/material";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useNavigate } from "react-router-dom";

const HomeScreen: React.FC = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleButtonClick = () => {
    const fetchData = async (textInput: string) => {
      setLoading(true);
      const newTextInput = textInput.replace(/ /g, "+");

      try {
        const response = await fetch(
          `https://spvzn3tnm0.execute-api.us-east-1.amazonaws.com/generate_itinerary?prompt=${newTextInput}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      } catch (error) {
        console.log("ERROR: " + error);
      } finally {
        setLoading(false);
        navigate("/plan");
      }
    };

    fetchData(textInput);
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "70vw",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        "@media (max-width: 600px)": {
          padding: "0 10px",
        },
      }}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              height: "10%",
              width: "100%",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                position: "absolute",
                top: "3px",
                left: "3px",
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
                top: 0,
                left: 0,
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
                top: "1.5px",
                left: "1.5px",
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
          </Container>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              margin: 0,
              padding: 0,
              marginTop: { xs: 20, sm: 10, md: 5, lg: 2 },
              textAlign: "left",
              direction: "column",
            }}
          >
            <TextField
              fullWidth
              label="Describe your dream vacation..."
              id="search-bar"
              variant="outlined"
              onChange={handleChange}
              InputProps={{ style: { width: "auto" } }}
              sx={{
                marginBottom: { xs: 2, sm: 0 },
                width: {
                  xs: 300,
                  sm: "calc(100% - 42px)",
                  md: 672,
                  lg: 810,
                  xl: 925,
                },
              }}
            />
            <Button
              variant="outlined"
              onClick={handleButtonClick}
              sx={{
                marginTop: { xs: 2, sm: 3 },
                width: "240px",
                height: "50px",
                padding: "17px 32px",
                border: "2px solid #FE285880",
                borderRadius: "4px",
                color: "transparent",
                background: `linear-gradient(225deg, #00F5FE, #EEF0F2, #FF3E85)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                "&:hover": {
                  backgroundColor: "#0A0A0A",
                  borderColor: "#2AF0EA80",
                  boxShadow: "0px 0px 0px 2px #2AF0EA80",
                },
                "&:active": {
                  boxShadow: "inset 0px 0px 0px 2px #FE285880",
                },
              }}
            >
              Generate Travel
            </Button>
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            By using our website, you agree to our{" "}
            <Link href="/privacy-policy" color="primary" underline="hover">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              color="primary"
              underline="hover"
            >
              Terms and Conditions
            </Link>
            .
          </Typography>
        </>
      )}
    </Box>
  );
};

export default HomeScreen;
