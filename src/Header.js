// import React, {Component} from "react"
// import ThemeContext from "./ThemeContext"
// class Header extends Component {
//     static contextType=ThemeContext
//     render() {
//         const theme=this.context
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>{theme==="Light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )    
//     }
// }
// // Header.contextType=ThemeContext //instead of using here we can use it as 
// //staticically inside header as extended class
// export default Header

import React,{useContext} from "react"
import { ThemeContext} from "./ThemeContext"
function Header() {
    const {theme}=useContext(ThemeContext)
    return (
      
            <header className={`${theme}-theme`}>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            </header>
       
    )    
}

export default Header
