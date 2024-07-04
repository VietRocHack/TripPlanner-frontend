import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { cleanTikTokVideoURL } from "../../utils/utils";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

interface TikTokVideoObject {
  url: string;
  id: string;
}

// import Typography from "@mui/material/Typography";

// interface VideoSelectorProps {
//   steps: string[];
// }

/**
 * Return a Stepper with multiple different ReactNodes as its steps
 */
export default function VideoSelector() {
  const [vid, setVid] = useState<string>("");
  const [listVid, setListVid] = useState<TikTokVideoObject[]>([]);
  /**
   * Chạy khi click upload button
   */
  const handleUpLoad = () => {
    if (vid.length == 0) {
      return;
    }
    const input = vid;
    const cleaned = cleanTikTokVideoURL(input);
    if (typeof cleaned === "string") {
      alert("Bad URL");
    } else {
      setListVid([...listVid, cleaned]);
      setVid("");
    }
  };

  // const deleteVideo = (index: number) => {
  //   setListVid((prevListVid) => prevListVid.filter((_, i) => i !== index));
  // }

  const handleVid = (event: ChangeEvent<HTMLInputElement>) => {
    setVid(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 1500,
          width: "100%",
          margin: 3,
          marginBottom: { xs: 2, sm: 2 },
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 8,
          }}
        >
          <TextField
            fullWidth
            label="Input your TikTok URL reel"
            id="search-bar"
            variant="standard"
            onChange={handleVid}
            value={vid}
            color="primary"
            InputProps={{ style: { width: "auto" } }}
            sx={{
              marginBottom: { xs: 2, sm: 0 },
              width: "80%",
            }}
          />

          <input
            style={{ display: "none" }}
            id="video-upload"
            type="text"
            value={vid}
          />
          <Button
            variant="contained"
            onClick={handleUpLoad}
            sx={{
              margin: "10px 0 0 10px",
            }}
          >
            Add video
          </Button>
        </Box>

        <FormGroup>
          <Typography
            variant="h5"
          >
            Your TikTok video library
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              height: 750,
              overflowY: "auto",
              backgroundColor: "lightgrey",
              borderRadius: "10px",
              padding: 2,
              margin: 0 // not sure why margin is set to -2 somewhere idk
            }}
          >
            {listVid.length > 0 ? (
              <>
                {listVid.map((video, index) => (
                  <Grid
                    padding="0"
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={`added-video-${index}`}
                    sx={{
                      padding: 0,
                      // display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                    }}
                  >
                    <AspectRatio ratio="9/16">
                      <iframe
                        src={`https://www.tiktok.com/player/v1/${video.id}?rel=0&description=1`}
                        style={{ borderRadius: "inherit" }}
                      />
                    </AspectRatio>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Add to the trip!"
                    />
                  </Grid>
                ))}
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  maxWidth: 400,
                  margin: "auto",
                  padding: 4,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <SlowMotionVideoIcon
                  fontSize="inherit"
                  sx={{ fontSize: 60, color: "primary.main" }}
                />
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{ marginTop: 2 }}
                >
                  Add your first TikTok here!
                </Typography>
              </Box>
            )}
          </Grid>
        </FormGroup>
      </Box>
    </Box>
  );
}
