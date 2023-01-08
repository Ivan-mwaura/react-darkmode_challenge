import React from "react"

function Card(props){
    return(
    <main  className = {props.darkMode ? "dark" : ""}>
      
        <div>
            <div className="card--heading">
                <h1>Fun facts about React</h1>
            </div> 
            <div className="card--content">
                    <ul className="card--facts">
                        <li>Was first created by Jordan Walker</li>
                        <li>Is a frontend library</li>
                        <li>Has well over 100k stars on Github</li>
                        <li> Is maintained by</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
            </div>
        </div>
        
    </main>
    )
}

export default Card
