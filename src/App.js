import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome name="John" age={31}/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};