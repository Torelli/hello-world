import React, { Component } from 'react'

class UserGreeting extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  // Abordagem Ternary Condition
    render() {
      return this.state.isLoggedIn ? (
        <div>Bem-vindo, Giovanni!</div>
       ) : (
        <div>Bem-vindo, Visitante!</div>
      )

      // Abordagem com Element Variables
      // let message
      // if (this.state.isLoggedIn) {
      //   message = <div>Bem-vindo, Giovanni!</div>
      // }
      // else {
      //   message = <div>Bem-vindo, Visitante!</div>
      // }

      // return <div>{message}</div>
        // Abordagem com If/Else
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Bem-vindo, Giovanni!</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Bem-vindo, Visitante!</div>
        //     )
        // }
    // return (
    //   <div>
    //     <div>Bem-vindo, Giovanni!</div>
    //     <div>Bem-vindo, Visitante!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
