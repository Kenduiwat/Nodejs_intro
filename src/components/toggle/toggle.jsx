import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.jpg"
import { ThemeContext } from "../../context";


function Toggle() {
    const theme = useContext(ThemeContext)
    
    const handleClick= () => {
        theme.dispatch({type: "TOGGLE" })
    }



    return ( 
        <div className = "toggle" >
            <img alt="sun_image" src={Sun} className="toggle-icon" />
            <img alt="moon_image" src={Moon} className = "toggle-icon" />
            <div className = "toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}>

            </div>
        </div>
    )
}

export default Toggle;