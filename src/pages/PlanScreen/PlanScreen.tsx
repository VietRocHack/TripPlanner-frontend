import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { getActivities } from "../../api/activitiesApi";

const PlanScreen = () => {
  useEffect(() => {
    console.log("hello world!!!");
    const data = getActivities();
    console.log("Plan details: ", data);
  }, []);

  return (
    <>
      <Box sx={{}}>
        <Typography>Hello this is the detail of your trip</Typography>
      </Box>
    </>
  );
};

export default PlanScreen;
