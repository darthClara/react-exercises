import React from "react";

export default class ClickCounter extends React.Component {

    state = {
        numero: 0
    }

    handleClick = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Clicker counter: {this.state.numero}</h1>
                <button onClick={this.handleClick}>INCREMENTA</button>
            </div>
        )
    }
}