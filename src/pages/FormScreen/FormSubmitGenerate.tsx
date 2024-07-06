// import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { TikTokVideoObject, TripInfo } from "../../utils/types";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

interface FormSubmitGenerateProps {
  tripInfo: TripInfo;
  videos: Map<string, TikTokVideoObject>;
}

export default function FormSubmitGenerate({
  videos,
  tripInfo,
}: FormSubmitGenerateProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    setLoading(true);
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += 1;
      setProgress(progressValue);
      if (progressValue >= 99) {
        clearInterval(interval);
        // Simulate API call delay
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
          // Handle API response here
        }, 300);
      }
    }, 300); // 99% in 30 seconds = 300ms interval
  };
  console.log(videos);
  console.log(tripInfo);
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
        textAlign: "center",
      }}
    >
      {!loading && (
        <>
          <IconButton
            sx={{ fontSize: "3rem" }}
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            <SendIcon sx={{ width: 200, height: 200 }} />
          </IconButton>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Ready? Swipe And Fly!
          </Typography>
        </>
      )}
      {loading && (
        <Box
          sx={{
            width: "80%",
            height: 30,
            backgroundColor: "f3f3f3",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              backgroundColor: "#FE2858",
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Box>
      )}
    </Paper>
  );
}
