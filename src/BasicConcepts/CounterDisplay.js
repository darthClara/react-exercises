import React from 'react'

export default class CounterDisplay extends React.Component {
    render() {
        return (
            <h1>
                Automatic counter: {this.props.numero}
            </h1>
        )
    }
}
