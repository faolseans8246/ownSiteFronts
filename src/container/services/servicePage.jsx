import React from "react";
import './servicePage.css';


function ServiceFunc({isDarkMode}) {
    return (
        <div className="serviceContainer">

            {/*Servicelarni blockka olish qismi*/}
            <div className={`service-block-place ${isDarkMode ? 'dark-mode' : ''}`}>
                {/*Birinchi service qator*/}
                <div className={`service-main-text-block ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Service block qismi*/}
                    <div className={`service-type-name-text ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Service nomi*/}
                        <h2 className={`service-type-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            Web services
                        </h2>
                        <p className={`service-mean-text-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            Web services, website development, their design parts, and deployment to the server are carried out.
                            The created web services, particularly websites, focus on flexibility, ensuring they are adjusted to
                            be viewed on browsers, computers, tablets, and mobile devices, making them adaptable and ready for use.
                            Web services are primarily specialized websites that are prepared with various levels of complexity,
                            using different technologies to create a modern appearance.
                        </p>
                    </div>
                </div>

                {/*Ikkinchi service qator*/}
                <div className={`service-main-text-block ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Service block qismi*/}
                    <div className={`service-type-name-text ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Service nomi*/}
                        <h2 className={`service-type-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            Data analitic
                        </h2>
                        <p className={`service-mean-text-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            With data analysis, we perform statistical analyses using various components and databases
                            and present these results in a convenient format. We use different software tools to form these
                            analyses, and precision is of utmost importance in carrying out these processes. In creating
                            these components, we also utilize precise computational technologies.
                        </p>
                    </div>
                </div>

                {/*Uchinchi service qator*/}
                <div className={`service-main-text-block ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Service block qismi*/}
                    <div className={`service-type-name-text ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Service nomi*/}
                        <h2 className={`service-type-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            Coding services
                        </h2>
                        <p className={`service-mean-text-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            In the development of the programming field, coding the program is of primary importance
                            as it expresses the main logic of the tasks being performed. This aspect is mainly handled
                            by back-end developers, and we also offer our services in this area, striving to deliver quality
                            services based on various technologies. The main part of the program code is based on precise
                            algorithms, and we pay close attention to this as well.
                        </p>
                    </div>
                </div>

                {/*To'rtinchi service qator*/}
                <div className={`service-main-text-block ${isDarkMode ? 'dark-mode' : ''}`}>
                    {/*Service block qismi*/}
                    <div className={`service-type-name-text ${isDarkMode ? 'dark-mode' : ''}`}>
                        {/*Service nomi*/}
                        <h2 className={`service-type-text ${isDarkMode ? 'dark-mode' : ''}`}>
                            Computer services
                        </h2>
                        <p className={`service-mean-text-place ${isDarkMode ? 'dark-mode' : ''}`}>
                            Working with computer technologies and their auxiliary devices is very important today, and it
                            is necessary to ensure they are compatible with each other for precise operation. We also offer
                            our services to carry out this process. Compatibility is crucial when designing a device, and
                            considering its performance capability is equally important. Making quality choices for this
                            process is also very significant.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceFunc;