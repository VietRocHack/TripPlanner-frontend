import React, { ChangeEvent, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useNavigate } from "react-router-dom";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import IconButton from "@mui/material/IconButton";

const HomeScreen: React.FC = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [embedHtml, setEmbedHtml] = useState(""); //store cái html để hiển thị video lên trang web
  const [vid, setVid] = useState<string>(""); //store url của vid
  const [listVid, setListVid] = useState<string[]>([]); //list to display all videos
  const navigate = useNavigate();

  /**
   * handle khi nhập url vào cái form field
   * @param event 
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

/**
 * Khi mà embedhtml nhận được url để hiện thị tiktok video, useEffect chạy để display video đó lên trang web
 */
  useEffect(() => {
    if (embedHtml) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [embedHtml]);

  //function to fetch tiktok video
  const fetchTikTok = async () => {
    try {
      const response = await fetch(`https://www.tiktok.com/oembed?url=${vid}`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setEmbedHtml(data.html); //giữ lấy cái html để hiển thị vid
        setListVid([...listVid, data]); //add vid vào list
      }
    } catch (error) {
      console.error("Can not receive the url", error);
    }
  };

  /**
   * Chạy khi click upload button
   */
  const handleUpLoad = () => {
    fetchTikTok(); //fetch tiktok video
    setVid("")
  };

  // const deleteVideo = (index: number) => {
  //   setListVid((prevListVid) => prevListVid.filter((_, i) => i !== index));
  // }

  const handleVid = (event: ChangeEvent<HTMLInputElement>) => {
    setVid(event.target.value);
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
          navigate("/plan", { state: { result } });
        } else {
          console.error(
            "Failed to fetch data. Response status:",
            response.status
          );
        }
      } catch (error) {
        console.log("ERROR: " + error);
      } finally {
        setLoading(false);
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
        //justifyContent: "center",
        //height: (embedHtml) ? "100vh" : "200vh",
        height: '200vh',
        width: "70vw",
        margin: 0,
        padding: 0,
        flexGrow: 1,
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
          <Box
            maxWidth="xl"
            sx={{
              position: "relative",
              height: "100px",
              width: "100%",
              textAlign: "left",
              marginTop: "300px"
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
          </Box>

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
            {/* Describe vacation input field */}
            <TextField
              fullWidth
              label="Describe your dream vacation..."
              id="search-bar"
              variant="outlined"
              onChange={handleChange}
              InputProps={{ style: { width: "auto" } }}
              sx={{
                marginBottom: { xs: 2, sm: 2 },
                width: {
                  xs: 300,
                  sm: "calc(100% - 42px)",
                  md: 672,
                  lg: 810,
                  xl: 925,
                },
              }}
            />

            <Typography
              variant="body1"
              paragraph
              sx={{
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "left",
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: {
                  xs: 300,
                  sm: "calc(100% - 42px)",
                  md: 672,
                  lg: 810,
                  xl: 925,
                },
                marginBottom: { xs: 2, sm: 2 },
              }}
            >
              <TextField
                fullWidth
                label="Input your TikTok URL reel"
                id="search-bar"
                variant="standard"
                onChange={handleVid}
                value={vid}
                InputProps={{ style: { width: "auto" } }}
                sx={{ marginBottom: { xs: 2, sm: 0 } }}
              />

              <input
                style={{ display: "none" }}
                id="video-upload"
                type="text"
                value={vid}
              />
              <label htmlFor="video-upload">
                <IconButton
                  color="primary"
                  aria-label="upload video"
                  component="span"
                  onClick={handleUpLoad}
                  sx={{
                    width: 56,
                    height: 56,
                    marginLeft: 1,
                  }}
                >
                  <FileUploadOutlinedIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </label>
            </Box>

            {embedHtml ? (
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {listVid.map((video, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3.5}
                    key={index}
                  >
                    <Box
                      dangerouslySetInnerHTML={{ __html: video }}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <></>
            )}

            <Button
              variant="outlined"
              onClick={handleButtonClick}
              sx={{
                marginTop: { xs: 1, sm: 2 },
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

        </>
      )}
    </Box>
  );
};

export default HomeScreen;