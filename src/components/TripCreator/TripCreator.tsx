import Box from "@mui/material/Box";
import { TripInfo } from "../../utils/types";
import { Typography } from "@mui/material";
import { Dispatch } from "react";

interface TripCreatorProps {
  tripInfo: TripInfo;
  setTripInfo: Dispatch<React.SetStateAction<TripInfo>>;
}

export default function TripCreator({
  tripInfo,
  setTripInfo,
}: TripCreatorProps) {
  console.log(tripInfo);
  console.log(setTripInfo);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography>Something here</Typography>
    </Box>
  );
}
