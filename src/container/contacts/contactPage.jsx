import React from "react";
import './contactPage.css';
import {BiPhone}         from "react-icons/bi";
import {CiMail, CiPhone} from "react-icons/ci";
import {MdEmail}         from "react-icons/md";
import {SiMicrosoftoutlook}                              from "react-icons/si";
import {FaFacebook, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";


function ContactFunc({isDarkMode}) {
    return (
        <div className="contactContainer">

            {/*Contact blocks*/}
            <div className={`contact-block-part ${isDarkMode ? 'dark-mode' : ''}`}>

                <div className={`contact-main-text-part ${isDarkMode ? 'dark-mode' : ''}`}>
                    <h1 className={`contact-main-text ${isDarkMode ? 'dark-mode' : ''}`}>
                        My Contacts
                    </h1>
                </div>

                {/*General contact block*/}
                <div className={`contact-outer-block ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Left block*/}
                    <div className={`contact-left-block ${isDarkMode ? 'dark-mode' : ''}`}>

                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <BiPhone className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                Phone 1:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <CiPhone className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                Phone 2:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <MdEmail className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                E-Mail 1:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <CiMail className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                E-Mail 2:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <SiMicrosoftoutlook className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                Outlook:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <FaTelegram className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                Telegram:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <FaWhatsapp className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                WhatsApp:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <FaInstagram className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                Instagram:
                            </h4>
                        </div>
                        {/*Block part messenger names and icons*/}
                        <div className={`contact-mess-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            <FaFacebook className="contact-mess-icons"/>
                            {/*Mess names*/}
                            <h4 className={`contact-mess-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                FaceBook:
                            </h4>
                        </div>
                    </div>

                    {/*Right block*/}
                    <div className={`contact-right-block ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                +(998 94) 281 - 82 - 46
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                +(998 33) 281 - 82 - 46
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                feruzbekkhamroev2002@gmail.com
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                feruzbekhamrayev2002@gmail.com
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                feruzbekkhamroev2002@outlook.com
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                @feruzbek_khamroev
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                @feruzbek_khamroev
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                @feruzbek_khamroev
                            </h4>
                        </div>
                        {/*Block part messenger values*/}
                        <div className={`contact-val-block ${isDarkMode ? 'dark-mode' : ''}`}>
                            {/*Mess values*/}
                            <h4 className={`contact-val-name ${isDarkMode ? 'dark-mode' : ''}`}>
                                @feruzbek_khamroev.3
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactFunc;