import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
    
    state = {
        numero: this.props.numeroIniziale,
    };

    componentDidMount() {
        this.timer = setInterval(
          () => this.setState({
            numero: this.state.numero + this.props.incremento,
        }),
          this.props.intervallo
        );
      }

      componentWillUnmount() {
        clearInterval(this.timer);
      }


    render() {
        return (
            <div style={{border: "1px solid black", margin: "20px 0px 20px 0px"}}>
                <CounterDisplay numero={this.state.numero}/>
            </div>
        )
    }
}