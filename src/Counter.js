import React from "react";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(
          () => this.scattoNumero(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timer);
      }

      scattoNumero() {
        this.setState({
            numero: this.state.numero + 1,
        });
      }

    render() {
        return (
            <div>
                <h1>
                    Counter: {this.state.numero}
                </h1>
            </div>
        )
    }
}