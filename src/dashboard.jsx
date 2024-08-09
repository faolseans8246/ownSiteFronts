import React, { useState } from "react";
import './dashboard.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pagelar bilan ishlash qismi
import HeaderPage from "./container/header";
import HomePage from "./container/home/homePage";
import PartfolyPage from "./container/partfoly/partfolyPage"
import SkillPage from "./container/skills/skillPage";
import ServicePage from "./container/services/servicePage"
import AboutPage from "./container/about/aboutPage";
import ContactPage from "./container/contacts/contactPage";
import FooterPage from "./container/footer";

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
                <HeaderPage toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
                        <Route path="partfoly" element={<PartfolyPage isDarkMode={isDarkMode} />} />
                        <Route path="skills" element={<SkillPage isDarkMode={isDarkMode} />} />
                        <Route path="services" element={<ServicePage isDarkMode={isDarkMode} />} />
                        <Route path="abouts" element={<AboutPage isDarkMode={isDarkMode} />} />
                        <Route path="contacts" element={<ContactPage isDarkMode={isDarkMode} />} />
                    </Routes>
                </div>

                <FooterPage />
            </div>
        </Router>
    );
}

export default DashFunc;
