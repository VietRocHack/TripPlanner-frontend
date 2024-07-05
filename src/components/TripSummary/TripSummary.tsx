import Box from "@mui/material/Box";
import { TikTokVideoObject, TripInfo } from "../../utils/types";
import { Typography } from "@mui/material";

interface TripSummaryProps {
  videos: Map<string, TikTokVideoObject>;
  tripInfo: TripInfo;
}

export default function TripSummary({ videos, tripInfo }: TripSummaryProps) {
  console.log(videos);
  console.log(tripInfo);
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
