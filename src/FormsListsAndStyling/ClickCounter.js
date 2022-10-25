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
            <div style={{border: "1px solid black", margin: "20px 0px 20px 0px"}}>
                <h1>Clicker counter: {this.state.numero}</h1>
                <button onClick={this.handleClick}>INCREMENTA</button>
            </div>
        )
    }
}