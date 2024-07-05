import Box from "@mui/material/Box";
import { TikTokVideoObject, TripInfo } from "../../utils/types";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { convertTo12HourFormat } from "../../utils/utils";

interface TripSummaryProps {
  videos: Map<string, TikTokVideoObject>;
  tripInfo: TripInfo;
}

export default function TripSummary({ videos, tripInfo }: TripSummaryProps) {
  console.log(videos);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        marginTop: 3,
        width: "100%",
        maxWidth: 1000,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Here's your trip summary
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" component="h2">
          I'll be going to
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {tripInfo.location}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" component="h2">
          My day starts at
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {convertTo12HourFormat(tripInfo.startTime)}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" component="h2">
          ...and ends at
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {convertTo12HourFormat(tripInfo.endTime)}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" component="h2">
          My vibes are
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="primary">
          {tripInfo.activityTags.join(", ")}
        </Typography>
      </Box>
      {tripInfo.comments !== "" && (
        <Box>
          <Typography variant="h6" component="h2">
            Special Notes
          </Typography>
          <Typography variant="h5" color="primary">
            {tripInfo.comments}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
