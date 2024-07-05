import {
  Box,
  Button,
  Checkbox,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { checkTikTokUrl, cleanTikTokVideoURL } from "../../utils/utils";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import DeleteIcon from "@mui/icons-material/Delete";
import { TikTokVideoObject } from "../../utils/types";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import { deepmerge } from "@mui/utils";
// import { lightTheme } from "../../utils/themes";
import { darkTheme } from "../../utils/themes";

interface VideoSelectorProps {
  videos: Map<string, TikTokVideoObject>;
  setVideos: Dispatch<React.SetStateAction<Map<string, TikTokVideoObject>>>;
}

const joyTheme = extendJoyTheme({
  cssVarPrefix: "mui",
});

const muiTheme = extendMuiTheme();

const theme = deepmerge(joyTheme, muiTheme);

/**
 * Return a Stepper with multiple different ReactNodes as its steps
 */
export default function VideoSelector({
  videos,
  setVideos,
}: VideoSelectorProps) {
  const [vid, setVid] = useState<string>("");
  const [listVid, setListVid] = useState<TikTokVideoObject[]>(
    JSON.parse(localStorage.getItem("listVid") ?? "[]")
  );
  const [vidIds, setVidIds] = useState<Set<string>>(
    new Set(JSON.parse(localStorage.getItem("vidIds") ?? "[]"))
  );
  const [addingVid, setAddingVid] = useState<boolean>(false);

  useEffect(() => {
    // update videos here too
    setVideos((prev) => {
      const newVideos = new Map<string, TikTokVideoObject>();
      prev.forEach((videoObj) => {
        if (vidIds.has(videoObj.id)) {
          newVideos.set(videoObj.id, videoObj);
        }
      });
      return newVideos;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("listVid", JSON.stringify(listVid));
  }, [listVid]);

  useEffect(() => {
    localStorage.setItem("vidIds", JSON.stringify([...vidIds]));
  }, [vidIds]);

  /**
   * Chạy khi click upload button
   */
  const handleAddVid = async () => {
    setAddingVid(true);
    if (vid.length == 0) {
      return;
    }
    const input = vid;
    const extractedVid = cleanTikTokVideoURL(input);
    if (typeof extractedVid === "string") {
      alert("Invalid TikTok URL");
    } else if (vidIds.has(extractedVid.id)) {
      alert("Already exists");
    } else {
      const isExist = await checkTikTokUrl(extractedVid.url);

      if (!isExist) {
        alert("This TikTok URL does not exist");
        return;
      }

      setListVid([...listVid, extractedVid]);
      setVidIds((prev) => {
        const newVidIds = new Set(prev);
        newVidIds.add(extractedVid.id);
        return newVidIds;
      });
      setVid("");
    }
    setAddingVid(false);
  };

  // const deleteVideo = (index: number) => {
  //   setListVid((prevListVid) => prevListVid.filter((_, i) => i !== index));
  // }

  const handleVid = (event: ChangeEvent<HTMLInputElement>) => {
    setVid(event.target.value);
  };

  const handleDeleteVid = (index: number, video: TikTokVideoObject) => {
    setListVid((prevListVid) => prevListVid.filter((_, i) => i !== index));
    setVidIds((prev) => {
      const newVidIds = new Set(prev);
      newVidIds.delete(video.id);
      return newVidIds;
    });
    setVideos((prev) => {
      const newVideos = new Map(prev);
      newVideos.delete(video.id);
      return newVideos;
    });
  };

  const handleChangeVid = (video: TikTokVideoObject) => {
    if (videos.has(video.id)) {
      setVideos((prev) => {
        const newVideos = new Map(prev);
        newVideos.delete(video.id);
        return newVideos;
      });
    } else {
      setVideos((prev) => {
        const newVideos = new Map(prev);
        newVideos.set(video.id, video);
        return newVideos;
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 1500,
        width: "100%",
        margin: 3,
        marginBottom: { xs: 2, sm: 2 },
        padding: 10,
        position: "relative",
        zIndex: "1",
        background: "#28282B",
        // filter: "drop-shadow(-10px -10px 0 #24f6f0) brightness(110%)",
        // boxShadow: "11.6px 10px 0 0 #fe2d52",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 8,
          padding: 3,
          border: "1px solid lightgrey",
          boxShadow: "5px 5px 0 0 lightgrey",
        }}
      >
        <TextField
          fullWidth
          label="Input your TikTok URL video"
          id="search-bar"
          variant="standard"
          onChange={handleVid}
          value={vid}
          color="primary"
          InputProps={{ style: { width: "auto" } }}
          sx={{
            marginBottom: { xs: 2, sm: 0 },
            width: "80%",
            color: "black",
          }}
          inputProps={{ style: { fontSize: "x-large" } }} // font size of input text
          InputLabelProps={{ style: { fontSize: "x-large" } }} // font size of input label
        />

        <input
          style={{ display: "none" }}
          id="video-upload"
          type="text"
          value={vid}
        />
        <Button
          variant="contained"
          onClick={handleAddVid}
          sx={{
            margin: "10px 0 0 10px",
            fontSize: "large",
          }}
          disabled={addingVid}
        >
          {addingVid ? "Adding...." : "Add video"}
        </Button>
      </Box>

      <FormGroup>
        <Typography variant="h5">
          Your TikTok video library
        </Typography>
        <Typography variant="h6">
          You selected {videos.size} out of {listVid.length} video
          {listVid.length > 1 ? "s" : ""}.
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 1,
            height: 750,
            overflowY: "auto",
            padding: 2,
            margin: 0, // not sure why margin is set to -2 somewhere idk
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
                  sx={{ padding: 0 }}
                >
                  {/* Display video using this component */}
                  <CssVarsProvider theme={theme}>
                    <AspectRatio ratio="9/16">
                      <iframe
                        src={`https://www.tiktok.com/player/v1/${video.id}?rel=0&description=1`}
                        style={{ borderRadius: "inherit" }}
                      />
                    </AspectRatio>
                  </CssVarsProvider>
                  
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={videos.has(video.id)}
                          onChange={() => {
                            handleChangeVid(video);
                          }}
                        />
                      }
                      label={
                        videos.has(video.id) ? (
                          <Typography color="primary">
                            Added to the trip!
                          </Typography>
                        ) : (
                          <Typography color="primary">
                            Add to the trip!
                          </Typography>
                        )
                      }
                    />
                    <IconButton
                      color="warning"
                      onClick={() => {
                        handleDeleteVid(index, video);
                      }}
                      disableRipple={true}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
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
                color="black"
                sx={{ marginTop: 2 }}
              >
                Add your first TikTok here!
              </Typography>
            </Box>
          )}
        </Grid>
      </FormGroup>
    </Box>
    </ThemeProvider>
  );
}
