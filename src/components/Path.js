import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import './FormStyles.css'; // Import the common styles

const Path = () => {
    const [uuid, setUUID] = useState('');
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [path, setPath] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:3001/get-path', {
                params: { uuid: uuid, start: start, finish: finish },
            });
            setPath(res.data.path);
        } catch (error) {
            console.error('Error getting path:', error);
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
                Get Path
            </Typography>
            <TextField
                label="UUID"
                fullWidth
                value={uuid}
                onChange={(e) => setUUID(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <TextField
                label="Start Location"
                fullWidth
                value={start}
                onChange={(e) => setStart(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <TextField
                label="Finish Location"
                fullWidth
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                margin="normal"
                variant="filled"
                className="text-field"
            />
            <Button variant="contained" color="primary" type="submit">
                Get Path
            </Button>
            {path && (
                <Box mt={2}>
                    <Typography variant="h6">Path:</Typography>
                    <Typography variant="body1">{path.join(' -> ')}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default Path;
