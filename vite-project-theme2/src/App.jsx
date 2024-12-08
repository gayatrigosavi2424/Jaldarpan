import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Reading from './components/Reading';
import Report from './components/Report';
import Alert from './components/Alert';

import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';



import Services from './components/Services';

const App = () => {
    return (
        <Router>
             <ScrollToTopOnRouteChange />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/reading" element={<Reading />} />
                <Route path="/services" element={<Services />} />
                <Route path="/report" element={<Report />} />
                <Route path="/alert" element={<Alert/>} />
                
            </Routes>
            
            <Footer />
        </Router>
    );
};

export default App;

