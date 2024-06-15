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
            component="section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: "70vw", 
                margin: 0, 
                padding: 0, 
                boxSizing: 'border-box', 
                '@media (max-width: 600px)': {
                    padding: '0 10px', 
                },
            }}
        >
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <TextField
                        sx={{ width: '70%', marginBottom: 10 }}
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
