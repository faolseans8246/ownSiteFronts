import React, { createContext, useState, useContext } from 'react';

// Tema kontekstini yaratish
const ThemeContext = createContext();

// Tema provayder komponenti
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Tema kontekstidan foydalanish hooki
export const useTheme = () => useContext(ThemeContext);
