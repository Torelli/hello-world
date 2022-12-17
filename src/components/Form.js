import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {

        const { username, comments, topic } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nome de usuário</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Comentários</label>
                    <textarea
                        name="comments"
                        value={comments}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>Tópicos</label>
                    <select name="topic" value={topic} onChange={this.handleInputChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default Form
