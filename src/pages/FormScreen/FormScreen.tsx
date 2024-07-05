// import React, { useState } from "react";
// import "./GetStartedScreen.css";

import ImageBackground from "../../components/Background/Background";
import { useState } from "react";
import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import Catchphrase from "../HomeScreen/Catchphrase";
import { TikTokVideoObject } from "../../utils/types";
import FormPartTwo from "./FormPartTwo";

import bgImage from "../../assets/wallpaper.jpg";

import "./FormScreen.css";
import { Grid } from "@mui/material";
import FormPartOne from "./FormPartOne";

// interface Time{
//   hour: number
//   minutes: number
// }

export default function FormScreen() {
  // const [location, setLocation] = useState<string>("");
  // const [startTime, setStartTime] = useState<Time>();
  // const [endTime, setEndTime] = useState<Time>();
  // const [preferredActivities, setPreferredActivities] = useState<string[]>()

  const [videos, setVideos] = useState<Map<string, TikTokVideoObject>>(
    new Map<string, TikTokVideoObject>()
  );

  return (
    <>
      <ImageBackground backgroundUrl={bgImage} opacity={0.2} />

      <div className="main-content">
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}></Grid>
          <Grid item xs={12} md={10}>
            <Catchphrase />
            <CustomHorizontalStepper
              steps={["Initial steps", "Add your touch", "Review your trip"]}
              nodes={[
                <FormPartOne></FormPartOne>,
                <FormPartTwo videos={videos} setVideos={setVideos} />,
                <>3</>,
                <>end</>,
              ]}
            />
          </Grid>
          <Grid item xs={0} md={1}></Grid>
        </Grid>
      </div>
    </>
  );
}
