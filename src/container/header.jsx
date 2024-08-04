import React, {useState, useEffect} from "react";
import moment from "moment";
import {FaSun, FaMoon, FaBars} from 'react-icons/fa';
import './header.css';
import {Link} from 'react-router-dom';

function HeaderFunc({toggleDarkMode, isDarkMode }) {

    // Func zone
    const [currentDateTime, setCurrentDateTime] = useState('');

    // Jarayon holatini yaratish functiono
    useEffect(() => {
        // Data Time qismni shakllantirish va hozirgi holatga o'rnatish
        const updateDateTime = () => {
            const now = moment();

            const times = now.format('HH:mm:ss');
            const weeks = now.format('dddd');
            const dates = now.format('DD-MM-YYYY');

            setCurrentDateTime({
                time: times,
                week: weeks,
                date: dates,
            });
        };

        updateDateTime();   // Data timeni yangilash qismi
        const timerId = setInterval(updateDateTime, 1000);  //Har sekundda yangilashni amalga oshirish qismi
        return () => clearInterval(timerId);
    }, []);

    // // Dark and Light mode bilan ishlash qismi
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // }

    // Menyu holatini boshqarish qismi
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    // React part
    return (
        <div className={`headerContainer ${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="header-block-part">

                {/*Header time zone*/}
                <div className="header-date-time-zone">
                    {/*Time zone*/}
                    <div className="header-time-zone">
                        {currentDateTime.time}
                    </div>
                    {/*Header week zone*/}
                    <div className="header-week-date-container">
                        <div className="header-week-zone">
                            {currentDateTime.week}
                        </div>
                        <div className="header-date-zone">
                            {currentDateTime.date}
                        </div>
                    </div>
                </div>

                {/*Header menu zone*/}
                <div className={`header-menu-zone ${isMenuOpen ? 'open' : ''}`}>
                    <div className="header-menu-buttons">
                        <Link href="#" to="/" className="header-menu-button">Home</Link>
                        <Link href="#" to="partfoly" className="header-menu-button">Portfolio</Link>
                        <a href="#" className="header-menu-button">Skills</a>
                        <a href="#" className="header-menu-button">Service</a>
                        <a href="#" className="header-menu-button">About</a>
                        <a href="#" className="header-menu-button">Contacts</a>
                    </div>
                </div>

                {/* Header night light zone */}
                <div className="header-light-night-zone">
                    <button className="header-button-clicks" onClick={toggleDarkMode}>
                        {isDarkMode ? <FaSun className="header-button-sun" /> : <FaMoon className="header-button-moon" />}
                    </button>
                    <button className="menu-toggle-button" onClick={toggleMenu}>
                        <FaBars className="header-menu-bar-button" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HeaderFunc;