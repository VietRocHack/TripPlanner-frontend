// import React, { useState } from "react";
// import "./GetStartedScreen.css";

import { useState } from "react";
import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import VideoSelector from "../../components/VideoSelector/VideoSelector";
import Catchphrase from "../HomeScreen/Catchphrase";
import { TikTokVideoObject } from "../../utils/types";
import { Typography } from "@mui/material";

// interface Time{
//   hour: number
//   minutes: number
// }

export default function FormScreen() {
  // const [location, setLocation] = useState<string>("");
  // const [startTime, setStartTime] = useState<Time>();
  // const [endTime, setEndTime] = useState<Time>();
  // const [preferredActivities, setPreferredActivities] = useState<string[]>()

  const [videos, setVideos] = useState<Map<string, TikTokVideoObject>>(new Map<string, TikTokVideoObject>())

  return (
    <>
      <Catchphrase/>
      <CustomHorizontalStepper
        steps={["Initial steps", "Add your touch", "Review your trip"]}
        nodes={[<VideoSelector videos={videos} setVideos={setVideos}/>, <>2</>, <>3</>, <>end</>]}
      />
    </>
  );
}
