// import React, { useState } from "react";
// import "./GetStartedScreen.css";

import ImageBackground from "../../components/Background/Background";
import { useState } from "react";
import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import Catchphrase from "../HomeScreen/Catchphrase";
import { TikTokVideoObject, TripInfo } from "../../utils/types";
import FormPartTwo from "./FormPartTwo";

import bgImage from "../../assets/wallpaper.jpg";

import "./FormScreen.css";
import { Box, Grid } from "@mui/material";
import FormPartOne from "./FormPartOne";
import FormPartThree from "./FormPartThree";

// interface Time{
//   hour: number
//   minutes: number
// }

export default function FormScreen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tripInfo, setTripInfo] = useState<TripInfo>({
    location: "",
    startTime: "",
    endTime: "",
    activityTags: [],
    comments: "",
  });
  const [videos, setVideos] = useState<Map<string, TikTokVideoObject>>(
    new Map<string, TikTokVideoObject>()
  );

  return (
    <>
      {/* <ImageBackground backgroundUrl={bgImage} opacity={0.2} /> */}

      <Box className="main-content">
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}></Grid>
          <Grid item xs={12} md={10}>
            <Catchphrase />
            <CustomHorizontalStepper
              steps={["Initial steps", "Add your touch", "Review your trip"]}
              nodes={[
                <FormPartOne tripInfo={tripInfo} setTripInfo={setTripInfo} />,
                <FormPartTwo videos={videos} setVideos={setVideos} />,
                <FormPartThree videos={videos} tripInfo={tripInfo} />,
                <>end</>,
              ]}
            />
          </Grid>
          <Grid item xs={0} md={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}
