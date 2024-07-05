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
import { Dispatch, useState } from "react";

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

  const [activity, setActivity] = useState([]);

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, background: "#28282B" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="start-time"
            label="Start Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="end-time"
            label="End Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="activity-label">Activity</InputLabel>
            <Select
              labelId="activity-label"
              id="activity"
              multiple
              value={activity}
              onChange={handleActivityChange}
              renderValue={(selected) => selected.join(", ")}
              label="Activity"
            >
              {Object.values(ActivityTag).map((activity) => (
                <MenuItem key={activity} value={activity}>
                  <Checkbox checked={activity.includes(activity)} />
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
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
