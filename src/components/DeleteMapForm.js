import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import './FormStyles.css'; // Import the common styles

const DeleteMapForm = () => {
    const [uuid, setUuid] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/delete-map', {
                params: uuid,
            });
            if (res.data.ok) {
                alert('Map deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting map:', error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: 3,
                backgroundColor: 'background.paper',
                p: 3,
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" gutterBottom>
                Delete Map
            </Typography>
            <TextField
                label="Map UUID"
                fullWidth
                value={uuid}
                onChange={(e) => setUuid(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <Button variant="contained" color="primary" type="submit">
                Delete Map
            </Button>
        </Box>
    );
};

export default DeleteMapForm;
