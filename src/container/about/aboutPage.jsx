
import React from "react";
import './aboutPage.css';


function AboutFunc({isDarkMode}) {
    return (
        <div className="aboutContainer">

            {/*Double block in about me*/}
            <div className={`about-block-place ${isDarkMode ? 'dark-mode' : ''}`}>

                {/*Left part for about me*/}
                <div className={`about-me-left-part-place ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*about Myself*/}
                    <div className={`about-block-my-self ${isDarkMode ? 'dark-mode' : ''}`}>

                        <div className={`about-notes-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h2 className={`about-notes-main-text ${isDarkMode ? 'dark-mode' : ''}`}>
                                About me
                            </h2>
                        </div>
                        <div className={`about-lect-part-myself ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Shablon qismi*/}
                            <div className={`about-template-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Lastname:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Firstname:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Father's name:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Birth-date:
                                </h4>
                            </div>

                            {/*Shablon qismi*/}
                            <div className={`about-value-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    KHamroev
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Feruzbek
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Komil ugli
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    1-fubruary 2002-year
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*My address place*/}
                    <div className={`about-my-address-place ${isDarkMode ? 'dark-mode' : ''}`}>
                        <div className={`about-address-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h2 className={`about-address-main-text ${isDarkMode ? 'dark-mode' : ''}`}>
                                My address
                            </h2>
                        </div>
                        <div className={`about-lect-part-address ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Shablon qismi*/}
                            <div className={`about-template-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Country:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Region:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    District:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    City / Village:
                                </h4>
                                {/*<h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>*/}
                                {/*    Street:*/}
                                {/*</h4>*/}
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Home:
                                </h4>
                            </div>

                            {/*Shablon qismi*/}
                            <div className={`about-value-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Uzbekistan
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Samarkand
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Kushrabot
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Bazaarjay village
                                </p>
                                {/*<p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>*/}
                                {/*    Bazaarjay Street*/}
                                {/*</p>*/}
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Home №110
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Right part*/}
                <div className="about-me-right-part-place">
                    {/*about Myself*/}
                    <div className={`about-block-my-study ${isDarkMode ? 'dark-mode' : ''}`}>

                        <div className={`about-study-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h2 className={`about-study-main-text ${isDarkMode ? 'dark-mode' : ''}`}>
                                School
                            </h2>
                        </div>
                        <div className={`about-lect-part-school ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Shablon qismi*/}
                            <div className={`about-template-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Region:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    District
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Name:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Years of education:
                                </h4>
                            </div>

                            {/*Shablon qismi*/}
                            <div className={`about-value-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Samarkand
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Kushrabot
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    School №58
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    ( 2009 - 2020 )
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*My Study place*/}
                    <div className={`about-my-study-place ${isDarkMode ? 'dark-mode' : ''}`}>
                        <div className={`about-study-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h2 className={`about-study-main-text ${isDarkMode ? 'dark-mode' : ''}`}>
                                University
                            </h2>
                        </div>
                        <div className={`about-lect-part-study ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Shablon qismi*/}
                            <div className={`about-template-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Region:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    District
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Name:
                                </h4>
                                <h4 className={`about-teplate-texts-part about-special-text ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Specialty:
                                </h4>
                                <h4 className={`about-teplate-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Years of education:
                                </h4>
                            </div>

                            {/*Shablon qismi*/}
                            <div className={`about-value-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Tashkent
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Yunusabad
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Toshkent University of Information technology
                                </p>
                                <p className={`about-value-texts-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    Software Engineer
                                </p>
                                <p className={`about-value-texts-part about-years-part ${isDarkMode ? 'dark-mode' : ''}`}>
                                    ( 2020 - 2024 )
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutFunc;