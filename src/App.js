import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome name="John" age={15}/>
                <Counter/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};