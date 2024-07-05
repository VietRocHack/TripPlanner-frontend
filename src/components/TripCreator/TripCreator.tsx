import Box from "@mui/material/Box";
import { ActivityTag, TripInfo } from "../../utils/types";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLocationChange = (event: any) => {
    setTripInfo((prev) => {
      return { ...prev, location: event.target.value };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleActivityChange = (event: any) => {
    setTripInfo((prev) => {
      return {
        ...prev,
        activityTags: event.target.value,
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStartTimeChange = (event: any) => {
    setTripInfo((prev) => {
      return {
        ...prev,
        startTime: event.target.value,
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEndTimeChange = (event: any) => {
    setTripInfo((prev) => {
      return {
        ...prev,
        endTime: event.target.value,
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCommentsChange = (event: any) => {
    setTripInfo((prev) => {
      return {
        ...prev,
        comments: event.target.value,
      };
    });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, background: "#28282B" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            placeholder="Ha Noi, Vietnam"
            value={tripInfo.location}
            label="Location"
            variant="outlined"
            fullWidth
            onChange={handleLocationChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="start-time"
            label="Start Time"
            type="time"
            value={tripInfo.startTime}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min
            fullWidth
            onChange={handleStartTimeChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="end-time"
            label="End Time"
            type="time"
            value={tripInfo.endTime}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min
            fullWidth
            onChange={handleEndTimeChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="activity-label">Activity</InputLabel>
            <Select
              labelId="activity-label"
              id="activity"
              multiple
              value={tripInfo.activityTags}
              onChange={handleActivityChange}
              renderValue={(selected) => selected.join(", ")}
              label="Activity"
            >
              {Object.values(ActivityTag).map((activity) => (
                <MenuItem key={activity} value={activity}>
                  <Checkbox
                    checked={tripInfo.activityTags.includes(activity)}
                  />
                  <ListItemText primary={activity} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="special-notes"
            label="Special Notes"
            variant="outlined"
            placeholder="E.g., Allergies, accessibility needs, travelling with children, or other preferences"
            multiline
            rows={4}
            fullWidth
            onChange={handleCommentsChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
