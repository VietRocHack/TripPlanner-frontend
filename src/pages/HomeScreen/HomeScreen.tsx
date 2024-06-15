// import React, { useState } from 'react'
// import { TextField, Button, Box } from '@mui/material'
// import LoadingScreen from '../LoadingScreen/LoadingScreen';
// import { useNavigate } from 'react-router-dom';
// //import { alignProperty } from '@mui/material/styles/cssUtils'

// const HomeScreen = () => {
//     const [loading, setLoading] = useState(false)
//     const navigate = useNavigate()

//     const handleButtonClick = () => {
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false)
//             navigate('/plan')
//         }, 5000)
//     }

//     return (
//         <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
//             {loading ? (
//                 <LoadingScreen />
//             ) : (
//                 <>
//                     <TextField 
//                         sx={{width: '50%', marginBottom: 5}}
//                         label="Create the best and optimal travel plan" 
//                         id="search-bar"
//                     />
//                     <Button variant='contained' onClick={handleButtonClick}>Let's find out</Button>
//                 </>
//             )}
    
//         </Box>
//     )
// }

// export default HomeScreen


import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { useNavigate } from 'react-router-dom';

const HomeScreen: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/plan');
        }, 5000);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <TextField
                        sx={{ width: '50%', marginBottom: 5 }}
                        label="Create the best and optimal travel plan"
                        id="search-bar"
                    />
                    <Button variant="contained" onClick={handleButtonClick}>
                        Let's find out
                    </Button>
                </>
            )}
        </Box>
    );
};

export default HomeScreen;
