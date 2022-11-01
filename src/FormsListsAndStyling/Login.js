import React, { useState } from "react"

export default function Login() {
  const [remember, setRemember] = useState("false")
  const [pass, setPass] = useState("")
  const [username, setUsername] = useState("")
  const [log, setLog] = useState("logoff")

  function handleClick() {
    if (pass && username && pass.length >= 8) {
      console.log(username, pass, remember)
      setPass("")
      setLog("logoff")
      setUsername("")
    } else {
      console.log(
        "Inserisci il campo username e una password lunga almeno 8 caratteri"
      )
    }
  }

  function handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    if (value === "true") {
      setRemember("false")
    } else if (value === "false") {
      setRemember("true")
    } else if (name === "username") {
      setUsername(value)
    } else if (name === "pass" && value.length >= 8) {
      setPass(value)
      setLog("logon")
    } else if (name === "pass" && value.length <= 8) {
      setPass(value)
      setLog("logoff")
    } else if (name === "reset") {
      setPass("")
      setLog("logoff")
      setUsername("")
    }
  }

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
