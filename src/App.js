import React from "react";
import Hello from "./BasicConcepts/Hello";
import Welcome from "./BasicConcepts/Welcome";
import Counter from "./BasicConcepts/Counter";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome name="John" age={15}/>
                <Counter numeroIniziale={0} intervallo={1000} incremento={1}/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};