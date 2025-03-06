import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Accommodation from '../pages/Accommodation';

// Set all application routes
function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/accommodation/:id" element={<Accommodation />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;

