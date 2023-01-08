import React from "react"
import logo from "./Images/logo192.png"
import "./style.css"

function Navbar(props){
    

    return(
    
        <nav id="Navbar" className={props.darkMode ? "dark" : ""}>
            
            <div className="nav" >
                <div className="nav--logo--div">
                    <img src = {logo}  alt ={"missing"}  className="nav--image"/>
                </div>
                <div className="nav--heading">
                    <h1>React Facts</h1>
                </div>
                <div 
                className="toggler" 
                >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </div>
            
        </nav>
        
    )
}
export default Navbar;