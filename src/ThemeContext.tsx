import React, { createContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
};
type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};