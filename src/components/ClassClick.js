import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        console.log("Botão clicado")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clique aqui!</button>
      </div>
    )
  }
}

export default ClassClick
