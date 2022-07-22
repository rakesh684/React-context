// import React,{ Component} from "react"
// const ThemeContext=React.createContext()

// class ThemeContextProvider extends Component{

//     state={
//       theme:"light"
//     }
//     togglerTheme=()=>{
//       this.setState(prevState=>{
//         return {
//           theme:prevState.theme==="light"? "dark" : "light"
//         }
//       })
//     }
//     render(){
//         return(
//            <ThemeContext.Provider value={{theme:this.state.theme , togglerTheme:this.togglerTheme}}>
//              {this.props.children}
//            </ThemeContext.Provider> 
//         )
//     }
// }
// export  {ThemeContextProvider , ThemeContext}

import React,{useState} from "react";
const ThemeContext=React.createContext()

function ThemeContextProvider(props){

  const [theme,setTheme] = useState('dark');
       
 function togglerTheme(){
  setTheme(prevTheme=>{
    return prevTheme==="light"? "dark" : "light"
  })
 }
      

        return(
           <ThemeContext.Provider value={{theme:theme ,togglerTheme:togglerTheme}}>
             {props.children}
           </ThemeContext.Provider> 
        )
    }

export  {ThemeContextProvider ,ThemeContext}

