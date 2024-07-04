import * as React from "react";
import { Typography } from "@mui/material";
// import Typography from "@mui/material/Typography";

interface VideoSelectorProps {
  steps: string[];
}

/**
 * Return a Stepper with multiple different ReactNodes as its steps
 */
export default function VideoSelector({
  steps,
}: VideoSelectorProps) {
  return (
    <Typography>
      {steps}
    </Typography>
  )
}
