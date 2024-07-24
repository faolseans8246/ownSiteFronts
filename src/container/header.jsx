import React, {useEffect} from "react";
import './header.css'

function HeaderFunc() {

    // menu oynasini moslashish qismini o'lchamini olish qismi
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });


    // Menu activ yoli passiv holati bilan ishlash qismi
    const [menuActive, setMenuActive] = React.useState(false);
    // Vaqt qismini qo'shish jarayoni
    const [currentTime, setCurrentTime] = React.useState(0);


    // Jarayonlarni boshqarish qismi
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // vaqt funcini qo'shiish
        const updateCurrentTime = () => {
            setCurrentTime(new Date());
        }

        // Oyna bilan ishlash qismi
        window.addEventListener('resize', handleResize);
        const timeInterval = setInterval(updateCurrentTime, 1000);

        return () => {
            window.removeEventListener('resize', handleResize)
            clearInterval(timeInterval);
        }

    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    // Vaqt bajarish qismlari
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = `${daysOfWeek[currentTime.getDay()]}, ${currentTime.getDate().toString().padStart(2, '0')}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getFullYear()}`;


    return (
        <div className="headerContainer">

            {/*Header qismi shakllantirish qismi*/}
            <div className="header-main-lenta-part">
                {/*date - Time zone*/}
                <div className="header-main-time-zone-part">
                    {formattedTime}<br/>
                    {formattedDate}
                </div>
                {/*Menu part*/}
                <div className="header-main-menu-list-part">
                    <div className="header-menu-button menu-button">
                        <button onClick={toggleMenu} className="header-menu-toggle-button">
                            ☰
                        </button>
                    </div>
                    {/*menu buttons*/}
                    <div className={`header-menu-icon ${menuActive ? 'active' : ''}`}>
                        <div className={`header-menu-list-buttons ${menuActive ? 'active' : ''}`}>
                            <a href="#" className="header-menu-button" style={{fontWeight: "bold"}}>Home</a>
                            <a href="#" className="header-menu-button">Portfolio</a>
                            <a href="#" className="header-menu-button">Skills</a>
                            <a href="#" className="header-menu-button">Service</a>
                            <a href="#" className="header-menu-button">Projects</a>
                            <a href="#" className="header-menu-button">About</a>
                            <a href="#" className="header-menu-button">Contacts</a>
                        </div>
                    </div>
                </div>
                {/*Night and Light part*/}
                <div className="header-ligroph-part-night-and-light">
                    <div className="header-night-and-light menu-button">
                        night/light
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderFunc;