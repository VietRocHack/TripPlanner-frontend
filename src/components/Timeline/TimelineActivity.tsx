import {
  Grid,
  Typography,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  IconButton,
} from "@mui/material";
import { Activity } from "../../utils/types";
import AspectRatio from "@mui/joy/AspectRatio";
import { deepmerge } from "@mui/utils";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import { cleanTikTokVideoURL } from "../../utils/utils";
import { useState } from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';

const joyTheme = extendJoyTheme({
  cssVarPrefix: "mui",
});
const muiTheme = extendMuiTheme();

const theme = deepmerge(joyTheme, muiTheme);

interface TimelineActivityProps {
  width: string;
  activity: Activity;
}

export default function TimelineActivity({
  activity,
  width,
}: TimelineActivityProps) {
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap: any = () => {
    setOpenMap(!openMap)
  }

  const displayTiktok = (url: string) => {
    const video = cleanTikTokVideoURL(url);
    if (typeof video === "string") {
      return <Typography>Broken URL link</Typography>;
    } else {
      return (
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.id}?rel=0&description=1`}
        ></iframe>
      );
    }
  };

  return (
    <div style={{ width: width }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h5" sx={{ mt: "0.4rem" }}>
            {activity.activity}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: "0.4rem" }}>
            {activity.location}
          </Typography>
          {activity.inspiredBy != null && (
            <>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", mt: "0.4rem" }}
              >
                Inspired by this TikTok Video
              </Typography>

              <Typography variant="body1" sx={{ mt: "0.2rem" }}>
                {activity.inspiredBy.explanation}
              </Typography>
            </>
          )}
          {openMap ? (
            <IconButton onClick={handleOpenMap}>
              <WrongLocationIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleOpenMap}>
              <FmdGoodIcon />
            </IconButton>
          )}
          {openMap && (
            <div style={{display: "flex", flexDirection: "column"}}>
              <iframe
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{borderRadius: "5px", marginTop: "1rem", maxWidth: '500px'}}
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${activity.location}`}
              ></iframe>
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {activity.inspiredBy != null && (
            <div style={{ maxWidth: "250px" }}>
              <CssVarsProvider theme={theme}>
                <AspectRatio ratio="9/16">
                  {displayTiktok(activity.inspiredBy.video_url)}
                </AspectRatio>
              </CssVarsProvider>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
