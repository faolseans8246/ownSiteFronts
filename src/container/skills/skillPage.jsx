import React from "react";
import './skillPage.css';
import {
    FaAndroid,
    FaCss3,
    FaDocker,
    FaFileExcel, FaFilePdf, FaFilePowerpoint, FaFileWord,
    FaJava,
    FaLinux,
    FaNode,
    FaPython,
    FaReact,
    FaUbuntu
} from "react-icons/fa";
import {
    SiArduino, SiBootstrap, SiCanva,
    SiCplusplus,
    SiDjango,
    SiFastapi, SiGit, SiGithub, SiGitlab,
    SiHibernate, SiHtml5, SiJavascript,
    SiJunit5, SiKalilinux, SiKubernetes, SiLibreoffice, SiMariadb, SiMui,
    SiNumpy, SiPandas, SiPostman, SiSass,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity, SiWebpack, SiWindows
} from "react-icons/si";
import {MdHtml} from "react-icons/md";
import {BsFiletypeXml}           from "react-icons/bs";
import {GrKubernetes, GrReactjs} from "react-icons/gr";
import {BiLogoTailwindCss}       from "react-icons/bi";
import {DiMysql, DiPostgresql} from "react-icons/di";

function SkillPages({isDarkMode}) {
    return (
        <div className="skillContainer">

            {/*Skill block bilan ishlash qismi*/}
            <div className={`skill-box-place ${isDarkMode ? 'dark-mode' : ''}`}>

                {/*Skill part*/}
                <div className={`skill-block-part-soft ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Back end part*/}
                    <div className={`skill-back-end-skill-part ${isDarkMode ? 'dark-mode' : ''}`}>

                        {/*Java Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <FaJava className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiSpring className="skill-back-frames" style={{color: "green"}}/>
                                <SiHibernate className="skill-back-frames" style={{color: "#703E3EFF"}}/>
                                <SiSpringsecurity className="skill-back-frames" style={{color: "green"}}/>
                                <SiJunit5 className="skill-back-frames" style={{color: "#703E3EFF"}}/>
                                <SiSpringboot className="skill-back-frames" style={{color: "green"}}/>
                            </div>
                        </div>

                        {/*Python Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <FaPython className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiDjango className="skill-back-frames" style={{color: "#0becda"}}/>
                                <SiFastapi className="skill-back-frames" style={{color: "#40ff00"}}/>
                                <SiNumpy className="skill-back-frames" style={{color: "green"}}/>
                                <SiPandas className="skill-back-frames" style={{color: "#ff002f"}}/>
                            </div>
                        </div>

                        {/*JavaScript Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <SiJavascript className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <FaNode className="skill-back-frames" style={{color: "green"}}/>
                                <FaReact className="skill-back-frames" style={{color: "#0598e6"}}/>
                            </div>
                        </div>

                        {/*C++ Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <SiCplusplus className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiArduino className="skill-back-frames" style={{color: "#315aed"}}/>
                            </div>
                        </div>
                    </div>


                    {/*Front-end end part*/}
                    <div className={`skill-back-end-skill-part ${isDarkMode ? 'dark-mode' : ''}`}>

                        {/*HTML Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <SiHtml5 className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <MdHtml className="skill-back-frames" style={{color: "green"}}/>
                                <BsFiletypeXml className="skill-back-frames" style={{color: "#703E3EFF"}}/>
                            </div>
                        </div>

                        {/*Css Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <FaCss3 className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiSass className="skill-back-frames" style={{color: "#f45b06"}}/>
                                <SiBootstrap className="skill-back-frames" style={{color: "#d406f4"}}/>
                            </div>
                        </div>

                        {/*ReactJS Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <GrReactjs className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <BiLogoTailwindCss className="skill-back-frames" style={{color: "#06bcf4"}}/>
                                <SiMui className="skill-back-frames" style={{color: "#8106f4"}}/>
                                <SiWebpack className="skill-back-frames" style={{color: "#3e96fa"}}/>
                            </div>
                        </div>
                    </div>


                    {/*DataBase end part*/}
                    <div className={`skill-back-end-skill-part ${isDarkMode ? 'dark-mode' : ''}`}>

                        {/*HTML Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <DiPostgresql className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">

                            </div>
                        </div>

                        {/*Css Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                <DiMysql className="skill-main-back-tech"/>
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiMariadb className="skill-back-frames" style={{color: "#0491e8"}}/>
                            </div>
                        </div>
                    </div>

                    {/*Other IT technologies part*/}
                    <div className={`skill-back-end-skill-part ${isDarkMode ? 'dark-mode' : ''}`}>

                        {/*Base Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                {/*<SiPostman className="skill-main-back-tech"/>*/}
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiPostman className="skill-back-frames" style={{color: "#e85404"}}/>
                                <FaDocker className="skill-back-frames" style={{color: "#04b3e8"}}/>
                                <SiKubernetes className="skill-back-frames" style={{color: "#04e8d5"}}/>
                            </div>
                        </div>

                        {/*Version Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                {/*<DiMysql className="skill-main-back-tech"/>*/}
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiGit className="skill-back-frames" style={{color: "#e85404"}}/>
                                <SiGithub className="skill-back-frames" style={{color: "#030e03"}}/>
                                <SiGitlab className="skill-back-frames" style={{color: "#f60632"}}/>
                            </div>
                        </div>

                        {/*System Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                {/*<DiMysql className="skill-main-back-tech"/>*/}
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <SiWindows className="skill-back-frames" style={{color: "#0498e8"}}/>
                                <FaLinux className="skill-back-frames" style={{color: "#fb0404"}}/>
                                <SiKalilinux className="skill-back-frames" style={{color: "#597ced"}}/>
                                <FaUbuntu className="skill-back-frames" style={{color: "#fb0404"}}/>
                                <FaAndroid className="skill-back-frames" style={{color: "#40ff00"}}/>
                            </div>
                        </div>

                        {/*Documentations Rows*/}
                        <div className={`skill-part-row-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Asosiy back-end dastur qismi*/}
                            <div className="skill-back-end-main-technology-icons">
                                {/*<DiMysql className="skill-main-back-tech"/>*/}
                            </div>

                            {/*Dasturlash texnologiyasi frameworklari*/}
                            <div className="skill-back-end-frameworks-part">
                                <FaFileExcel className="skill-back-frames" style={{color: "#1c8f18"}}/>
                                <FaFileWord className="skill-back-frames" style={{color: "#04b9fb"}}/>
                                <FaFilePowerpoint className="skill-back-frames" style={{color: "#f36a07"}}/>
                                <SiCanva className="skill-back-frames" style={{color: "#0452fb"}}/>
                                <SiLibreoffice className="skill-back-frames" style={{color: "#0077ff"}}/>
                                <FaFilePdf className="skill-back-frames" style={{color: "#ff0008"}}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SkillPages;