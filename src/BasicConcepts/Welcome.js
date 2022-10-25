import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {

    render() {
        return (
            <div style={{border: "1px solid black", margin: "20px 0px 20px 0px"}}>
                <p>
                    Welcome, {this.props.name}!
                </p>
                {this.props.age &&  this.props.age <= 65 && this.props.name === "John" && <Age age={this.props.age}/>}
            </div>
        )
    }
}