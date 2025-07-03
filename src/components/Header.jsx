import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import {IconContext} from "react-icons";
import {useState} from "react";

const Header = () => {
    const lightTheme = {
        backgroundColor: 'white',
        color: 'black'
    }
    const darkTheme ={
        backgroundColor: 'black',
        color: 'white'
    }
    const [lightMode, setLightMode] = useState(true);
    const [theme, setTheme] = useState(lightTheme);
    return (
        <div className="flex justify-between items-center p-5 " style={theme}>
            <h1 className="text-3xl" >ThemeToggle</h1>
            <IconContext.Provider value={{ className: "text-2xl" }}>
                <button onClick={
                    () => {
                        if (lightMode) {
                            setTheme(darkTheme);
                        } else {
                            setTheme(lightTheme);
                        }
                        setLightMode(!lightMode);
                    }
                }>{ lightMode ? <FaMoon /> : <FaSun/>}</button>
            </IconContext.Provider>

        </div>
    )
}
export default Header
