import React from "react";

export default class Login extends React.Component {

    state = {
        remember: true,
        pass: "",
        username: "",
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if (value === true) {
            this.setState({
                remember: false
            })
        }
        else if (value === false) {
            this.setState({
                remember: true
            })
        }
        else if (name === "username") {
            this.setState({
                username: value
            })
        }
        else if (name === "pass") {
            this.setState({
                pass: value
            })
        }

    }

    render() {
        return (
            <div style={{ border: "1px solid black", margin: "20px 0px 20px 0px" }}>
                <input type="text" name="username" value={this.state.value} />
                <br />
                <input type="password" name="pass" value={this.state.value} />
                <br />
                <input type="checkbox" name="remember" value={this.state.remember} />
            </div>
        )
    }
}