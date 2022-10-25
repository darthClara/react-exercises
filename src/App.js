import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>Basic concepts</h2>
                <hr/>
                <Hello/>
                <Welcome name="John" age={15}/>
                <Counter numeroIniziale={0} intervallo={1000} incremento={1}/>
                <hr/>
                <h2>Forms, lists, and styling</h2>
                <hr/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};