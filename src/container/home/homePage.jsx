import React from "react";
import './homePage.css';

import {useSpring, animated} from "@react-spring/web";
import Typical from 'react-typical';

import MyImage from '../../images/homeMyImege.jpg'

// Home pageni shakllantirish qismi
function HomeFunc({ isDarkMode }) {
    //Action methods
    const styles = useSpring({
        loop: true,
        to: [
            { transform: 'translate3d(100%, 0, 0)' },
            { transform: 'translate3d(-100%, 0, 0)' },
        ],
        from: { transform: 'translate3d(-100%, 0, 0)' },
        config: { duration: 2000 },
    });

    // Web sahifa qismi
    return (
        <div className={`homeContainer ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className={`home-page-contents ${isDarkMode ? 'dark-mode' : ''}`}>
                {/*Home left part*/}
                <div className={`home-left-content-place ${isDarkMode ? 'dark-mode' : ''}`}>
                    <div className={`home-left-about-text-place-top ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Home text part*/}
                        <div className={`home-about-me-main-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h1 className={`home-name-text-place ${isDarkMode ? 'dark-mode' : ''}`}>
                                Feruzbek KHamroev
                            </h1>
                            <h3 className={`home-my-job-place ${isDarkMode ? 'dark-mode' : ''}`}>
                                Software Engineer
                            </h3>
                        </div>
                        {/*Home about text part*/}
                        <div className={`home-about-me-place-notes ${isDarkMode ? 'dark-mode' : ''}`}>
                            <div className={`home-about-me-notes ${isDarkMode ? 'dark-mode' : ''}`}>
                                Hello, I am a developer, and this is my permanent profession.
                                I am committed to growth and innovation in this field, and I am always striving for
                                improvement.
                                In the future, I aim to develop further and achieve various milestones in this industry,
                                which is one of my main goals.
                                Currently, I am studying different technologies related to this field, which will be
                                very useful for me in the future.
                                IT is a vast domain, and I have set a goal to learn various parts of it and achieve
                                success.
                                At present, I am learning many technologies and already know a lot of them. In this
                                direction,
                                I want to make many innovations and enhance my experience with these advancements.
                            </div>
                        </div>
                    </div>

                    {/*Home left bottom part*/}
                    <div className={`home-left-place-bottom-part ${isDarkMode ? 'dark-mode' : ''}`}>
                        <div className={`animated-code ${isDarkMode ? 'dark-mode' : ''}`}>
                            <Typical
                                steps={[
                                    'class HelloWorld {', 1000,
                                    'class HelloWorld {\n    public static void main(String[] args) {', 1000,
                                    'class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Feruzbek KHamroev\'s web site");', 1000,
                                    'class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Feruzbek KHamroev\'s web site");\n    }', 1000,
                                    'class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Feruzbek KHamroev\'s web site");\n    }\n}', 1000,
                                ]}
                                loop={1}
                                wrapper="pre"
                            />
                        </div>
                    </div>
                </div>

                {/*Right part*/}
                <div className={`home-right-content-place ${isDarkMode ? 'dark-mode' : ''}`}>
                    <div className={`home-my-image-place ${isDarkMode ? 'dark-mode' : ''}`}>
                        <img src={MyImage} alt="" className="home-my-image-in"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFunc;