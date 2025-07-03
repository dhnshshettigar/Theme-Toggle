import React, {useEffect, useState} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import {IconContext} from "react-icons";

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

    useEffect(() => {
        document.body.style.backgroundColor = lightMode ? lightTheme.backgroundColor : darkTheme.backgroundColor;
        document.body.style.color = lightMode ? lightTheme.color : darkTheme.color;
    },[lightMode])

    return (
        <div className="flex justify-between items-center p-5 " style={theme}>
            <h1 className="text-3xl" >ThemeToggle</h1>
            <IconContext.Provider value={{ className: "text-2xl" }}>
                <button onClick={
                    () => {
                        setTheme(lightMode ? darkTheme : lightTheme);
                        setLightMode(!lightMode);
                    }
                }>{ lightMode ? <FaMoon /> : <FaSun/>}</button>
            </IconContext.Provider>

        </div>
    )
}
export default Header
