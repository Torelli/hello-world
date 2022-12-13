import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Olá!'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: 'Adeus :('
    //     })
    //     console.log(this)
    // }

clickHandler = () => {
    this.setState({
        message: 'Adeus :('
    })
}

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clique aqui</button> */}
        {/* <button onClick={() => this.clickHandler()}>Clique aqui</button> */}
        <button onClick={this.clickHandler}>Clique aqui</button>
      </div>
    )
  }
}

export default EventBind
