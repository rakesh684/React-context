import React, { useContext }  from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import { ThemeContext} from "./ThemeContext"

export default function App() {
 const {theme,togglerTheme}=useContext(ThemeContext)
  return (
    <div>
         <Header />
         <Button theme={theme} togglerTheme={togglerTheme}/>
      
         
    </div>
)
}