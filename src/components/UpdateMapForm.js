import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import './FormStyles.css'; // Import the common styles

const UpdateMapForm = () => {
    const [uuid, setUuid] = useState('');
    const [mapData, setMapData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/update-map', {
                filter: { uuid },
                updatedMap: mapData,
            });
            if (res.data.ok) {
                alert('Map updated successfully');
            }
        } catch (error) {
            console.error('Error updating map:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, backgroundColor: 'background.paper', p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>Update Map</Typography>
            <TextField
                label="Map UUID"
                fullWidth
                value={uuid}
                onChange={(e) => setUuid(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <TextField
                label="Updated Map Data"
                fullWidth
                multiline
                rows={6}
                value={mapData}
                onChange={(e) => setMapData(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <Button variant="contained" color="primary" type="submit">Update Map</Button>
        </Box>
    );
};

export default UpdateMapForm;
