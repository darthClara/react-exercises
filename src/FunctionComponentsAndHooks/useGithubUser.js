import React, {useState, useEffect} from "react"

export default function useGithubUser(name) {
    const [data, setData] = useState(null)


    async function fetchData(name) {

        const response =  await fetch(`https://api.github.com/users/${name}`)
        const json = await response.json()
        setData(json)
        }


    useEffect(() => {

     fetchData(name)

    }, [name])

    return {
        data
    }
}