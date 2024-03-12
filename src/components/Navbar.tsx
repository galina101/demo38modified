import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from "../ThemeContext";
export function Navbar(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="dark-theme-toggle">
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
            </div>

            <div className="navbar">
            <Link to='products'>Products page</Link>
            <br></br>
            <Link to='sellers'>Sellers page</Link>
            <br></br>
            <Link to='landing'>Home page</Link>
            </div>
        </>
    )
}