import React from "react";
import { UserContextConsumer } from "./userContext";
import Footer from "./Footer";

class Form extends React.Component{
       render(){
        return(
            <div>
                <Footer />
                <UserContextConsumer>
                    {username=>(
                        <main>
                            <p className="main">No new notification</p>
                            <input 
                                type="text"
                                name="newUsername"
                                placeholder="New username"
                                value={this.state.newUsername}
                                onChange={this.handleChange}
                            />
                            <button>Change Username</button>
                        </main>
                    )}
                </UserContextConsumer>
            </div>
        )
       }
}
export default Form