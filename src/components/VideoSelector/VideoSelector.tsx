import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";

// import Typography from "@mui/material/Typography";

// interface VideoSelectorProps {
//   steps: string[];
// }

/**
 * Return a Stepper with multiple different ReactNodes as its steps
 */
export default function VideoSelector() {
  const [vid, setVid] = useState<string>("");
  const [listVid, setListVid] = useState<string[]>([]);
  /**
   * Chạy khi click upload button
   */
  const handleUpLoad = () => {
    const input = vid;
    setListVid([...listVid, input]);
    setVid("");
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
          maxWidth: 1000,
          width: "100%",
          margin: 3,
          marginBottom: { xs: 2, sm: 2 },
          backgroundColor: "white",
          padding: 10
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 4
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
              input: { color: "white" }
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
            sx={{
              margin: "10px 0 0 10px"
            }}
          >
            Add video
          </Button>

        </Box>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {listVid.map((video, index) => (
            <Grid item xs={12} sm={6} md={3.5} key={index}>
              <AspectRatio ratio="9/16" sx={{ borderRadius: "20px" }}>
                {/* <iframe
                  className="tiktok-embed"
                  src="https://www.tiktok.com/player/v1/6718335390845095173?rel=0&description=1"
                  style={{ borderRadius: "inherit" }}
                /> */}
                {video}
              </AspectRatio>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
