import React  from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import { ThemeContextConsumer} from "./ThemeContext"

export default function App() {
 
  return (
    <div>
         <Header />
         <ThemeContextConsumer>
           {theme=>(
            <Button theme={theme.theme} togglerTheme={theme.togglerTheme}/>
           )}
        </ThemeContextConsumer>
         
    </div>
)
}