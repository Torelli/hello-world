import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            count: 0
        }
    }
    increaseCounter(){
        //this.setState({
        //    count: this.state.count + 1
        //}, () => console.log('Callback value ', this.state.count))

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decreaseCounter(){
        //this.setState({
        //    count: this.state.count - 1
        //}, () => console.log('Callback value ', this.state.count))

        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }
  
    render() {
    return (
      <div>
        <div>Contagem - {this.state.count}</div>
        <button onClick={() => this.increaseCounter()}>Aumentar</button>
        <button onClick={() => this.decreaseCounter()}>Diminuir</button>
      </div>
    )
  }
}

export default Counter
