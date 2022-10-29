import React from "react";

export default class Container extends React.Component {
    render() {
        return (
            <div className="backgroundWhite borderRed">
                <h3>{this.props.title}</h3>
                {this.props.children}
            </div>
        )
    }
}