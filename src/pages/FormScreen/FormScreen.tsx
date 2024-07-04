// import React, { useState } from "react";
// import "./GetStartedScreen.css";

import { useState } from "react";
import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import Catchphrase from "../HomeScreen/Catchphrase";
import { TikTokVideoObject } from "../../utils/types";
import FormPartTwo from "./FormPartTwo";

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
      <Catchphrase />
      <CustomHorizontalStepper
        steps={["Initial steps", "Add your touch", "Review your trip"]}
        nodes={[
          <>1</>,
          <FormPartTwo videos={videos} setVideos={setVideos} />,
          <>3</>,
          <>end</>,
        ]}
      />
    </>
  );
}
