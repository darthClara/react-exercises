import React, { useState } from "react"

export default function useLogin(valoriInseriti, submit) {
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

  function handleChange(valoriInseriti) {
    const value = valoriInseriti.target.value
    const name = valoriInseriti.target.name

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

  return ({
    handleClick: handleClick,
    handleChange: handleChange,
    username: username,
    pass: pass,
    remember: remember,
    log: log
  }
)

}
