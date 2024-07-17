import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Indoor Navigation System
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/save-map">Save Map</Button>
                    <Button color="inherit" component={Link} to="/update-map">Update Map</Button>
                    <Button color="inherit" component={Link} to="/delete-map">Delete Map</Button>
                    <Button color="inherit" component={Link} to="/get-path">Get Path</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
