// import React, { useState } from "react";
// import "./GetStartedScreen.css";

import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import FormPartOne from "../FormScreen/FormPartOne";
import Catchphrase from "../HomeScreen/Catchphrase";

// interface Time{
//   hour: number
//   minutes: number
// }

export default function FormScreen() {
  // const [location, setLocation] = useState<string>("");
  // const [startTime, setStartTime] = useState<Time>();
  // const [endTime, setEndTime] = useState<Time>();
  // const [preferredActivities, setPreferredActivities] = useState<string[]>()

  // const [videos, setVideos] = useState<string[]>()

  return (
    <>
      <Catchphrase/>
      <CustomHorizontalStepper
        steps={["Initial steps", "Add your touch", "Review your trip"]}
        nodes={[<FormPartOne />, <>2</>, <>3</>, <>end</>]}
      />
    </>
  );
}
