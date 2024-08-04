import React from "react";
import './partfolyPage.css';
import MyCVFile from '../../docs/MyCV.pdf';
import { Carousel } from 'react-bootstrap';
import GitHubImage from '../../images/github_avatar.png'
import MyCVImage from '../../images/resume.png'
import LeetCodeImg from '../../images/LeetCodeImage.jpg'
import InstagramImages from '../../images/InstaImag.jpg'
import LinkedInImages from '../../images/LinkEdinImage.webp'
import TMeImage from '../../images/T-channel.jpg'

// Partfoly qismi bilan ishlash
function PartfolyFunc({isDarkMode}) {

    return (
        // Partfoly qismi bilan ishlash
        <div className={`partfolyContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <Carousel className={`portfoly-blocks-part ${isDarkMode ? 'dark-mode' : ''}`}>
                <Carousel.Item className={`partfoly-block-part ${isDarkMode ? 'dark-mode' : ''}`}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="First slide"
                    />
                    <Carousel.Caption className={`special-background ${isDarkMode ? 'dark-mode' : ''}`}>
                        <h3>My Resumes</h3>
                        <p>In this section, you can explore the projects I have completed in the field of programming and partially utilize them.</p>
                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open('https://github.com/faolseans8246', '_blank')}
                        >

                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={GitHubImage} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>

                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open(MyCVFile, '_blank')}
                        >
                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={MyCVImage} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>

                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open('https://leetcode.com/u/Feruzbek_KHamroev/', '_blank')}
                        >
                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={LeetCodeImg} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>
                    </Carousel.Caption>

                </Carousel.Item>

                {/*Second Carousel*/}
                <Carousel.Item className={`partfoly-block-part ${isDarkMode ? 'dark-mode' : ''}`}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption className={`special-background ${isDarkMode ? 'dark-mode' : ''}`}>
                        <h3>My social media contents</h3>
                        <p>In this section, I have created video content and articles in the field of programming, and you can view them.</p>
                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open('http://www.instagram.com/feruzbek_khamroev', '_blank')}
                        >
                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={InstagramImages} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>

                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open('https://www.linkedin.com/in/feruzbek-khamroev-b411a5297', '_blank')}
                        >
                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={LinkedInImages} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>

                        <button
                            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}
                            onClick={() => window.open('https://t.me/feruzbek_khamroevs', '_blank')}
                        >
                            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>
                                <img src={TMeImage} alt="GitHub"
                                     className={`partfoly-icon-image ${isDarkMode ? 'dark-mode' : ''}`}/>
                            </div>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>


                {/*Third carousel*/}
                {/*<Carousel.Item className={`partfoly-block-part ${isDarkMode ? 'dark-mode' : ''}`}>*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src="https://via.placeholder.com/800x400"*/}
                {/*        alt="Third slide"*/}
                {/*    />*/}
                {/*    <Carousel.Caption>*/}
                {/*        <h3>Third slide label</h3>*/}
                {/*        <p>Some representative placeholder content for the third slide.</p>*/}
                {/*        <button*/}
                {/*            className={`partfoly-cd-pdf-file-button ${isDarkMode ? 'dark-mode' : ''}`}*/}
                {/*            onClick={() => window.open(MyCVFile, '_blank')}*/}
                {/*        >*/}
                {/*            <div className={`partfoly-cv-in-button ${isDarkMode ? 'dark-mode' : ''}`}>*/}
                {/*                MyCV*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
            </Carousel>
        </div>
    )
}

export default PartfolyFunc;
