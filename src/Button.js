import React from "react"
// import ThemeContext from "./ThemeContext"
// import PropTypes from "prop-types"
// import {ThemeContextConsumer} from './ThemeContext';
function Button(props) {
    console.log(props);
    return (

      <button onClick={props.togglerTheme} className={`${props.theme}-theme`}>Switch Theme</button>
   )    
}


export default Button
