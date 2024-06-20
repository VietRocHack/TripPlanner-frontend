import { Typography, Box, Button, Divider } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import { useEffect, useState } from "react";
// import { getActivities } from "../../api/activitiesApi";
// import Footer from "../../components/Footer/Footer";
// import React from "react";

const PlanScreen = () => {
  // const [data, setData] = useState(null);

  // const handleFetch = () => {  
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://54.208.8.227:8000/generate_itinerary?prompt=Hanoi%20Vietnam");
  //       if (response.ok) {
  //         const res = await response.json();
  //         console.log(res.data);
  //         setData(res.data);
  //       } else {
  //         console.error("Failed to fetch data: ", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }

  // useEffect(() => {
  //   // Uncomment this if you want to fetch activities when the component mounts
  //   // const data = getActivities();
  //   // console.log("Plan details: ", data);
  // }, []);

  return (
      <>
        <Box
            component="section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                width: "70vw", 
                margin: 0, 
                padding: 0, 
                boxSizing: 'border-box', 
                '@media (max-width: 600px)': {
                    padding: '0 10px', 
                },
            }}
        >
          {/* Header */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px 20px',
              width: '100%'
            }}
          >
            <Box sx={{ padding: '20px', textAlign: 'left', fontFamily: 'Inter' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Here's what we have planned.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                <FmdGoodIcon sx={{ fontSize: 40, color: 'inherit' }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  HANOI, VIETNAM
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontSize: '15px' }}>
                  Monday, August 31st - Wednesday, September 2nd 
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography sx={{ fontSize: '15px' }}>
                  $50 - $100
                </Typography>
              </Box>
              
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button 
                variant="contained" 
                sx={{ bgcolor: 'black', color: 'white', '&:hover': { bgcolor: 'darkgrey' } }}
              >
                Edit Preferences
              </Button>
              <Button 
                variant="contained" 
                sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'lightgrey' } }}
              >
                Print Itinerary
              </Button>
            </Box>
          </Box>

          <Divider />
          
        </Box>
      </>
  );
};

export default PlanScreen;
