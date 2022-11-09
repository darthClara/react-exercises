import React, {useEffect, useState} from "react"
import { GithubUser } from "./GithubUser"

export default function GithubUserList() {
    const [input, setInput] = useState("")
    const [array, setArray] = useState([])

    function handleInput(e) {
        const value = e.target.value
        setInput(value)
    }

    function handleClick() {
        setArray([...array, input])
    }

    useEffect(() => {

    }, [array])

  return (
    <div>
      <div>
        <input value={input} onChange={handleInput}></input>
        <button onClick={handleClick}>TROVA L'UTENTE</button>
      </div>
      <div>
        {array.map((user, index) => (
            <GithubUser username={user} key={index}/>
        ))}
      </div>
    </div>
  )
}
