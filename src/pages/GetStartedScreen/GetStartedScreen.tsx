import React from "react";
import './GetStartedScreen.css'
import Catchphrase from "../HomeScreen/Catchphrase";
import { Button, Typography } from "@mui/material";
// import HorizontalStepper from "../../components/Stepper/HorizontalStepper";
import CustomHorizontalStepper from "../../components/Stepper/CustomHorizontalStepper";
import VideoSelector from "../../components/VideoSelector/VideoSelector";

const GetStartedScreen: React.FC = () => {
    return (
      <>
        <div className="bg">
            <img src="./src/assets/background.jpeg" alt=""/>
            <div className="bg-dark-cover"></div>     
        </div>
        <div className="main-flex">
          <Catchphrase />
          <Typography variant="body1" sx={{color: "white"}}>
            SwipeAndFly is your travel helper with your interests and favorites in mind.
          </Typography>
          <Button>Get started</Button>
          <CustomHorizontalStepper 
          steps={["Step 1", "Step 2", "Step 3"]}
          nodes={[
            <>1</>,
            <VideoSelector steps={["something"]}/>,
            <>3</>,
            <>end</>
          ]}
          />
        </div>
      </>
    );
}

export default GetStartedScreen;