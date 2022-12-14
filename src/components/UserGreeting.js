import React, { Component } from 'react'

class UserGreeting extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  
    render() {
        if (this.state.isLoggedIn){
            return (
                <div>Bem-vindo, Giovanni!</div>
            )
        }
        else {
            return (
                <div>Bem-vindo, Visitante!</div>
            )
        }
    // return (
    //   <div>
    //     <div>Bem-vindo, Giovanni!</div>
    //     <div>Bem-vindo, Visitante!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
