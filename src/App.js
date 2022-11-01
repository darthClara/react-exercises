import React from "react";
import Hello from "./BasicConcepts/Hello"
import Welcome from "./BasicConcepts/Welcome";
import Counter from "./BasicConcepts/Counter";
import ClickCounter from "./FormsListsAndStyling/ClickCounter";
import ClickTracker from "./FormsListsAndStyling/ClickTracker";
import InteractiveWelcome from "./FormsListsAndStyling/InteractiveWelcome";
import Login from "./FormsListsAndStyling/Login";
import UncontrolledLogin from "./FormsListsAndStyling/UncontrolledLogin";
import TodoList from "./FormsListsAndStyling/TodoList";
import Container from "./Components/Container";
import { Language } from "./Components/Language";
import Sum from "./FunctionComponentsAndHooks/Sum";

export default class App extends React.Component {
    render() {

        // {this.state.items.map((li) => (
        //     <li><input type="button" value="X" onClick={this.removeHandler}/>{li}</li>
        //   ))}

        return (
            <div>
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Basic concepts</h2>
                <Hello/>
                <Welcome name="John" age={15}/>
                <Counter numeroIniziale={0} intervallo={1000} incremento={1}/>
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Forms, lists, and styling</h2>         
                <ClickCounter/>
                <ClickTracker/>
                <InteractiveWelcome/>
                <Login/>
                <UncontrolledLogin/>
                <TodoList render={(items, removeHandler) =>
                     { return (items.map((item, index) => (
                        <li key={index}><input key={index} type="button" value="X" onClick={removeHandler}/>{item}</li>
                      )))}
                }/>
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Composition</h2>         
                <Container title="Gattini"/>
                <Language />
                <h2 style={{textAlign: "center", fontSize: "30px"}}>Function components and hooks</h2>
                {/* <Sum numeri={[10, 5, 10]}/> */}
                <Sum />
            </div>
        )
    }
}

Welcome.defaultProps={name: <strong>utente anonimo</strong>};