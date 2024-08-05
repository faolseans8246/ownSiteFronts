import React from 'react';
import './footer.css';
import {
    SiCplusplus,
    SiDiscord,
    SiFacebook, SiHtml5,
    SiInstagram, SiJavascript, SiLinkedin, SiMicrosoftoutlook,
    SiTelegram,
    SiThreads,
    SiTiktok,
    SiTwitter,
    SiWhatsapp
} from "react-icons/si";
import {CiPhone}                                                from "react-icons/ci";
import {BiCurrentLocation, BiMap, BiPhone, BiSolidEditLocation} from "react-icons/bi";
import {MdEmail}                                                from "react-icons/md";
import {GrDocumentOutlook} from "react-icons/gr";
import {TiLocation}               from "react-icons/ti";
import {FaCss3, FaJava, FaPython} from "react-icons/fa";
import {TbSql}                    from "react-icons/tb";

function FooterFunc() {
    return (
        <div className="footerContainer">
            {/*main footer block*/}
            <div className="footer-part-blocks">

                {/*footer block qismlari*/}
                <div className="footer-part-of-blocks">
                    {/*Footer text part*/}
                    <div className="footer-main-text-block">
                        <h3 className="footer-text-main">
                            Messangers
                        </h3>
                    </div>

                    {/*Footer messanger*/}
                    <div className="fotter-messangers-part">
                        <a href="https://www.linkedin.com/in/feruzbek-khamroev-b411a5297" target="_blank" className="footer-mess-link">
                            <SiLinkedin className="mess-icons"/>
                            <p className="footer-mess-names">LinkedIn</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="https://t.me/feruzbek_khamroevs" target="_blank" className="footer-mess-link">
                            <SiTelegram className="mess-icons"/>
                            <p className="footer-mess-names">Telegram</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="https://www.instagram.com/feruzbek_khamroev" target="_blank" className="footer-mess-link">
                            <SiInstagram className="mess-icons"/>
                            <p className="footer-mess-names">Instagram</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="https://www.facebook.com/feruzbek_khamroev.3" target="_blank" className="footer-mess-link">
                            <SiFacebook className="mess-icons"/>
                            <p className="footer-mess-names">Facebook</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="http://www.twitter.com/f_khamroev" target="_blank" className="footer-mess-link">
                            <SiTwitter className="mess-icons"/>
                            <p className="footer-mess-names">Twitter</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="http://www.tiktok.com/feruzbek_khamroev" target="_blank" className="footer-mess-link">
                            <SiTiktok className="mess-icons"/>
                            <p className="footer-mess-names">TikTok</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="https://wa.me/qr/A7DFCVP2NXBZL1" target="_blank" className="footer-mess-link">
                            <SiWhatsapp className="mess-icons"/>
                            <p className="footer-mess-names">WhatsApp</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="http://www.threads.com/feruzbek_khamroev" target="_blank" className="footer-mess-link">
                            <SiThreads className="mess-icons"/>
                            <p className="footer-mess-names">Threads</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="https://www.discord.com/feruzbekkhamroev/" target="_blank" className="footer-mess-link">
                            <SiDiscord className="mess-icons"/>
                            <p className="footer-mess-names">Discord</p>
                        </a>
                    </div>
                </div>

                {/*footer contact part qismlari*/}
                <div className="footer-part-of-blocks">
                    {/*Footer text part*/}
                    <div className="footer-main-text-block">
                        <h3 className="footer-text-main">
                            Contacts
                        </h3>
                    </div>

                    {/*Footer messanger*/}
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <BiPhone className="mess-icons"/>
                            <p className="footer-mess-names">+(998 94) 281-82-46</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <BiPhone className="mess-icons"/>
                            <p className="footer-mess-names">+(998 33) 281-82-46</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <MdEmail className="mess-icons"/>
                            <p className="footer-mess-names">feruzbekkhamroev2002@gmail.com</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <MdEmail className="mess-icons"/>
                            <p className="footer-mess-names">feruzbekhamrayev2002@gmail.com</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <SiMicrosoftoutlook className="mess-icons"/>
                            <p className="footer-mess-names">feruzbekkhamroev2002@outlook.com</p>
                        </a>
                    </div>
                </div>

                {/*footer address part qismlari*/}
                <div className="footer-part-of-blocks">
                    {/*Footer text part*/}
                    <div className="footer-main-text-block">
                        <h3 className="footer-text-main">
                            Address
                        </h3>
                    </div>

                    {/*Footer messanger*/}
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <BiMap className="mess-icons"/>
                            <p className="footer-mess-names">
                                Samarkand region, Kushrabot district, <br />Bazaarjay street Bazaarjay village,
                                <br />Home-110
                            </p>
                        </a>
                    </div>

                </div>

                {/*footer skills part qismlari*/}
                <div className="footer-part-of-blocks">
                    {/*Footer text part*/}
                    <div className="footer-main-text-block">
                        <h3 className="footer-text-main">
                            Technologies
                        </h3>
                    </div>

                    {/*skill messanger*/}
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <FaJava className="mess-icons"/>
                            <p className="footer-mess-names">Java</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <FaPython className="mess-icons"/>
                            <p className="footer-mess-names">Python</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <SiJavascript className="mess-icons"/>
                            <p className="footer-mess-names">JavaScript</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <SiCplusplus className="mess-icons"/>
                            <p className="footer-mess-names">C++</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <TbSql className="mess-icons"/>
                            <p className="footer-mess-names">SQLs</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <SiHtml5 className="mess-icons"/>
                            <p className="footer-mess-names">HTML</p>
                        </a>
                    </div>
                    <div className="fotter-messangers-part">
                        <a href="#" className="footer-mess-link">
                            <FaCss3 className="mess-icons"/>
                            <p className="footer-mess-names">CSS</p>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FooterFunc;