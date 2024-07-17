import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SaveMap from './pages/SaveMap';
import UpdateMap from './pages/UpdateMap';
import DeleteMap from './pages/DeleteMap';
import GetPath from './pages/GetPath';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/save-map" element={<SaveMap />} />
                <Route path="/update-map" element={<UpdateMap />} />
                <Route path="/delete-map" element={<DeleteMap />} />
                <Route path="/get-path" element={<GetPath />} />
            </Routes>
        </div>
    );
}

export default App;
