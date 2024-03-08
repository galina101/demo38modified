import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from "../ThemeContext";
export function Navbar(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <br></br>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
            <br></br>
            <br></br>
            <Link to='products'>Products page</Link>
            <br></br>
            <Link to='sellers'>Sellers page</Link>
            <br></br>
            <Link to='landing'>Home page</Link>

        </>
    )
}