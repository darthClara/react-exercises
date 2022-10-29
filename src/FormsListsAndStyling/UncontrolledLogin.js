import React from "react";

export default class UncontrolledLogin extends React.Component {

    render() {
        return (
            <form style={{ border: "1px solid black", margin: "20px 0px 20px 0px" }}>
                <input type="text" placeholder="Username" autoFocus required />
                <br />
                <input type="password" placeholder="Password" required />
                <br />
                <input type="checkbox" />
                <span> Remember</span>
                <br />
                <input type="submit" value="LOGIN" />
                <input type="reset" value="RESET" />
            </form>
        )
    }
}