import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
// import Home from '../Home';

const Customer = () => {
    return (
        <Routes>
            <Route path='/' element={Home} />
        </Routes>
    );
};

export default Customer;