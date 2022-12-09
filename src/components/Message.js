import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Bem-vindo, visitante'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Obrigado por se inscrever!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Inscrever-se</button>
            </div>
        ) 
    }
}

export default Message