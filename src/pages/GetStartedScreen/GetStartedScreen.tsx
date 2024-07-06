import React from "react";
import "./GetStartedScreen.css";
//import Catchphrase from "../HomeScreen/Catchphrase";
import { Button, Typography } from "@mui/material";
import ImageBackground from "../../components/Background/Background";
import Catchphrase from "../HomeScreen/Catchphrase";
import bgImage from "../../assets/background.jpeg";

const GetStartedScreen: React.FC = () => {
  return (
    <div className="main-content">
      <ImageBackground backgroundUrl={bgImage} opacity={0.3} />
      <div className="main-flex">
        <Catchphrase />
        <Typography variant="h6" sx={{ color: "white" }} textAlign="center">
          SwipeAndFly plans your next memories.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            document.location.href = "./create-trip";
          }}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default GetStartedScreen;
