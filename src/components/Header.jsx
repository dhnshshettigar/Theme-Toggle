import React, {useEffect, useState} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import {IconContext} from "react-icons";

const Header = () => {
    const lightTheme = {
        headerBackgroundColor: 'white',
        headerColor: 'black',
        bodyBackgroundColor: 'white',
        bodyColor: 'black'
    }
    const darkTheme ={
        headerBackgroundColor: '#333', // Darker gray for header
        headerColor: 'white',
        bodyBackgroundColor: 'black',
        bodyColor: 'white'
    }
    const [lightMode, setLightMode] = useState(true);
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        document.body.style.backgroundColor = lightMode ? lightTheme.bodyBackgroundColor : darkTheme.bodyBackgroundColor;
        document.body.style.color = lightMode ? lightTheme.bodyColor : darkTheme.bodyColor;
    },[lightMode])

    return (
        <div className="flex justify-between items-center p-5 " style={{backgroundColor: theme.headerBackgroundColor, color: theme.headerColor}}>
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
