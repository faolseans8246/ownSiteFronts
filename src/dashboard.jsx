import React, { useState } from "react";
import './dashboard.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pagelar bilan ishlash qismi
import HeaderPage from "./container/header";
import HomePage from "./container/home/homePage";
import PartfolyPage from "./container/partfoly/partfolyPage"

function DashFunc() {
    // Dark mode holatini saqlash
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Dark mode holatini almashtirish funksiyasi
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <Router>
            <div className={`dashContainer ${isDarkMode ? 'dark-mode' : ''}`}>
                <HeaderPage toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage isDarkMode={isDarkMode}/>} />
                        <Route path="partfoly" element={<PartfolyPage isDarkMode={isDarkMode}/>}/>

                        {/*<HomePage isDarkMode={isDarkMode} />*/}
                        {/*<HomePage isDarkMode={isDarkMode} />*/}
                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default DashFunc;
