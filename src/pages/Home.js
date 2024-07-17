import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import './Home.css';

function Home() {
    return (
        <Container>
            <Box className="home-container">
                <img src={`${process.env.PUBLIC_URL}/inLogo.jpg`} alt="Ins and Outs Logo" className="logo-animation" />
                <Typography variant="h4" gutterBottom>Welcome to the Indoor Navigation System</Typography>
                <Typography variant="body1">
                    Use the navigation bar to manage your maps and find paths within buildings.
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;
