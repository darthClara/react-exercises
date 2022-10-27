import React from "react";
import Hello from "./BasicConcepts/Hello"
import Welcome from "./BasicConcepts/Welcome";
import Counter from "./BasicConcepts/Counter";
import ClickCounter from "./FormsListsAndStyling/ClickCounter";
import ClickTracker from "./FormsListsAndStyling/ClickTracker";
import InteractiveWelcome from "./FormsListsAndStyling/InteractiveWelcome";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Basic concepts</h2>
                <hr/>
                <Hello/>
                <Welcome name="John" age={15}/>
                <Counter numeroIniziale={0} intervallo={1000} incremento={1}/>
                <hr/>
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Forms, lists, and styling</h2>
                <hr/>
                <ClickCounter/>
                <ClickTracker/>
                <InteractiveWelcome/>
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};