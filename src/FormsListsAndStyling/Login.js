import React, { useState } from "react"
import useLogin from "../FunctionComponentsAndHooks/useLogin"

export default function Login() {
  const { handleClick, handleChange, username, pass, remember, log } = useLogin()

  return (
    <form>
      <input
        placeholder="Username"
        type="text"
        className="formsElements"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        className="formsElements"
        name="pass"
        value={pass}
        onChange={handleChange}
      />
      <br />
      <input
        type="checkbox"
        className="formsElements"
        name="remember"
        value={remember}
        onChange={handleChange}
      />
      <span> Remember</span>
      <br />
      <input
        type="button"
        id={log}
        name="login"
        value="LOGIN"
        onClick={handleClick}
      />
      <input type="reset" name="reset" value="RESET" onClick={handleChange} />
    </form>
  )
}

// export default class Login extends React.Component {

//     state = {
//         remember: "false",
//         pass: "",
//         username: "",
//         log: "logoff"
//     }

//     handleClick = () => {

//         if (this.state.pass && this.state.username && this.state.pass.length >= 8) {
//             this.onLogin(this.state);

//         } else {console.log("Inserisci il campo username e una password lunga almeno 8 caratteri")}
//     }

//     onLogin = () => {
//         console.log(this.state)
//     }

//     handleChange = (e) => {

//         const value = e.target.value;
//         const name = e.target.name;

//         if (value === "true") {
//             this.setState({
//                 remember: "false"
//             })
//         }
//         else if (value === "false") {
//             this.setState({
//                 remember: "true"
//             })
//         }
//         else if (name === "username") {
//             this.setState({
//                 username: value
//             })
//         }
//         else if ((name === "pass") && (value.length >= 8)) {
//             this.setState({
//                 pass: value,
//                 log: "logon",
//             })
//         }
//         else if ((name === "pass") && (value.length <= 8)) {
//             this.setState({
//                 pass: "",
//                 log: "logoff",
//             })
//         }
//     }

//     render() {
//         return (
//             <form>
//                 <input placeholder="Username" type="text" className="formsElements" name="username" value={this.state.value} onChange={this.handleChange}/>
//                 <br />
//                 <input placeholder="Password" type="password" className="formsElements" name="pass" value={this.state.value} onChange={this.handleChange}/>
//                 <br />
//                 <input type="checkbox" className="formsElements" name="remember" value={this.state.remember} onChange={this.handleChange}/>
//                 <span> Remember</span>
//                 <br />
//                 <input type="button" id={this.state.log} name="login" value="LOGIN" onClick={this.handleClick}/>
//                 <input type="reset" name="reset" value="RESET" onClick={this.handleChange}/>
//             </form>
//         )
//     }
// }
