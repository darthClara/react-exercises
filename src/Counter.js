import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: props.numeroIniziale
        };
    }

    componentDidMount() {
        this.timer = setInterval(
          () => this.scattoNumero(),
          this.props.intervallo
        );
      }

      componentWillUnmount() {
        clearInterval(this.timer);
      }

      scattoNumero() {
        this.setState({
            numero: this.state.numero + this.props.incremento,
        });
      }

    render() {
        return (
            <div>
                <CounterDisplay numero={this.state.numero}/>
            </div>
        )
    }
}