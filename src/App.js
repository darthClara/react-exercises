import React from "react";
import Hello from "./BasicConcepts/Hello"
import Welcome from "./BasicConcepts/Welcome";
import Counter from "./BasicConcepts/Counter";
import ClickCounter from "./FormsListsAndStyling/ClickCounter";

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
                <ClickCounter/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};