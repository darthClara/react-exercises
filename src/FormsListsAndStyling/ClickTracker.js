
import React from "react";

export default class ClickTracker extends React.Component {

    state = {
        contenuto: "clicca un tasto",
    }

    clickHandler = (e) => {
        if (e.target.value === "carta") {
            const value = e.target.value;
            this.setState({
                contenuto: "Hai scelto " + value,
            })
        } 
        else if (e.target.value === "forbice") {
            const value = e.target.value;
            this.setState({
                contenuto: "Hai scelto " + value,
            })
        } 
        else if (e.target.value === "sasso") {
            const value = e.target.value;
            this.setState({
                contenuto: "Hai scelto " + value,
            })
        }
    }

        render() {
            return (
                <div style={{ border: "1px solid black" }}>
                    <button onClick={this.clickHandler} value="carta">CARTA</button>
                    <button onClick={this.clickHandler} value="forbice">FORBICE</button>
                    <button onClick={this.clickHandler} value="sasso">SASSO</button>
                    <h1>{this.state.contenuto}</h1>
                </div>
            )
        }
    }