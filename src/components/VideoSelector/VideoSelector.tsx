import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { checkTikTokUrl, cleanTikTokVideoURL } from "../../utils/utils";
import { TikTokVideoObject } from "../../utils/types";
import { Send } from "@mui/icons-material"; // Import icon for button
import VideoDisplay from "./VideoDisplay/VideoDisplay";
import { darkTheme } from "../../utils/themes";
interface VideoSelectorProps {
  videos: Map<string, TikTokVideoObject>;
  setVideos: Dispatch<React.SetStateAction<Map<string, TikTokVideoObject>>>;
}

/**
 * Return a Stepper with multiple different ReactNodes as its steps
 */
export default function VideoSelector({
  videos,
  setVideos,
}: VideoSelectorProps) {
  const isMobile = useMediaQuery(darkTheme.breakpoints.down("sm"));
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

  const handleVid = (event: ChangeEvent<HTMLInputElement>) => {
    setVid(event.target.value);
  };

  /**
   * Chạy khi click upload button
   */
  const handleAddVid = async () => {
    console.log("Adding vid");
    setAddingVid(true);
    if (vid.length === 0) {
      alert("Empty");
      setAddingVid(false);
      return;
    }
    const input = vid;
    console.log("cleaning vid");

    const extractedVid = cleanTikTokVideoURL(input);
    console.log("cleaning vid done");

    if (typeof extractedVid === "string") {
      alert("Invalid TikTok URL");
    } else if (vidIds.has(extractedVid.id)) {
      alert("Already exists");
    } else {
      console.log("Checking exsistence");
      const isExist = await checkTikTokUrl(extractedVid.url);
      console.log("Done");

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 1500,
        width: "100%",
      }}
    >
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
        <Typography variant="h6">Your TikTok video library</Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          You selected {videos.size} out of {listVid.length} video
          {listVid.length > 1 ? "s" : ""}.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={11}>
            <TextField
              id="location"
              placeholder="https://www.tiktok.com/@drinklinknyc/video/7374836750948076846"
              label="Your favorite TikTok review video URL"
              variant="outlined"
              fullWidth
              required
              value={vid}
              onChange={handleVid}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size={isMobile ? "medium" : "large"}
              // sx={{ ...(isMobile && { display: "inline-block" }) }}
              color="primary"
              disabled={addingVid}
              onClick={handleAddVid}
            >
              {addingVid ? <CircularProgress color="primary" /> : <Send />}
            </IconButton>
          </Grid>
        </Grid>
        <VideoDisplay
          listVid={listVid}
          videos={videos}
          handleChangeVid={handleChangeVid}
          handleDeleteVid={handleDeleteVid}
          sx={{
            padding: 3,
            borderRadius: 2,
            marginTop: 3,
            width: "100%",
            background: "#131314",
            maxWidth: 1000,
          }}
        />
      </Paper>
    </Box>
  );
}
