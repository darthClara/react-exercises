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
            <div>
                <CounterDisplay numero={this.state.numero}/>
            </div>
        )
    }
}