import React,{ Component} from "react"
const ThemeContext=React.createContext()

class ThemeContextProvider extends Component{

    state={
      theme:"light"
    }
    togglerTheme=()=>{
      this.setState(prevState=>{
        return {
          theme:prevState.theme==="light"? "dark" : "light"
        }
      })
    }
    render(){
        return(
           <ThemeContext.Provider value={{theme:this.state.theme , togglerTheme:this.togglerTheme}}>
             {this.props.children}
           </ThemeContext.Provider> 
        )
    }
}
export  {ThemeContextProvider , ThemeContext}


// function ThemeContextProvider(props){

//   const [theme,setTheme] = useState('light');


      

//         return(
//            <Provider value={{theme ,setTheme}}>
//              {props.children}
//            </Provider> 
//         )
//     }

// export  {ThemeContextProvider ,Consumer as ThemeContextConsumer}

