import React from 'react'
import './components/style.css'
import Card from "./components/main"
import Navbar from './components/Navbar'

function App() {
 const[darkMode,setMode] = React.useState(true)

  function toggleMode(){
   
    setMode(prevMode => !prevMode)
    
    }
  
  return (
    <div className = "container" >
        <Navbar
         darkMode = {darkMode}
         toggleMode = {toggleMode}
        />
        <Card  darkMode  = {darkMode}/>
    </div>
  )
}

export default App;
