import React from "react";

export default class Container extends React.Component {
    render() {
        return (
            <div className="backgroundWhite borderRed">
                {this.props.children}
            </div>
        )
    }
}