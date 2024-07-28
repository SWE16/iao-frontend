import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import './FormStyles.css'; // Import the common styles

const MapForm = () => {
    const [mapData, setMapData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/save-map', {
                data: mapData,
            });

            if (res.data.ok) {
                alert(`Map saved successfully. \nUUID: ${res.data.uuid}`);
            }
        } catch (error) {
            console.error('Error saving map:', error);
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
                Save Map
            </Typography>
            <TextField
                label="Map Data"
                fullWidth
                multiline
                rows={6}
                value={mapData}
                onChange={(e) => setMapData(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <Button variant="contained" color="primary" type="submit">
                Save Map
            </Button>
        </Box>
    );
};

export default MapForm;
