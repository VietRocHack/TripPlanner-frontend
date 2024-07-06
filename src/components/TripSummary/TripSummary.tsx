import Box from "@mui/material/Box";
import { TikTokVideoObject, TripInfo } from "../../utils/types";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { convertTo12HourFormat } from "../../utils/utils";
import VideoDisplay from "../VideoSelector/VideoDisplay/VideoDisplay";
import { darkTheme } from "../../utils/themes";

interface TripSummaryProps {
  videos: Map<string, TikTokVideoObject>;
  tripInfo: TripInfo;
}

export default function TripSummary({ videos, tripInfo }: TripSummaryProps) {
  const isMobile = useMediaQuery(darkTheme.breakpoints.down("sm"));

  console.log(videos);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        marginTop: 3,
        width: "100%",
        background: "#28282B",
        maxWidth: 1000,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Here's your trip summary
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">I'll be going to</Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {tripInfo.location ? tripInfo.location : "Anywhere, lol"}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">My day starts at</Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {convertTo12HourFormat(tripInfo.startTime)}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">...and ends at</Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {convertTo12HourFormat(tripInfo.endTime)}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">My vibes are</Typography>
        <Typography variant="h5" fontWeight="bold" color="primary">
          {tripInfo.activityTags.length > 0
            ? tripInfo.activityTags.join(", ")
            : "Anything!"}
        </Typography>
      </Box>
      {tripInfo.comments !== "" && (
        <Box>
          <Typography variant="h6">Special Notes</Typography>
          <Typography variant="h5" color="primary">
            {tripInfo.comments}
          </Typography>
        </Box>
      )}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" color="secondary">
          I want to do stuff in these TikToks
        </Typography>
        {isMobile && (
          <Typography variant="body1">(swipe right to see more)</Typography>
        )}

        <VideoDisplay
          listVid={[...videos.values()]}
          videos={videos}
          orientation="horizontal"
          sx={{
            padding: 3,
            borderRadius: 2,
            marginTop: 3,
            width: "100%",
            background: "#131314",
            marginBottom: 3,
          }}
          videosPerRow={isMobile ? 1 : 5}
          minimalSettings
        />
      </Box>
    </Paper>
  );
}
