import React, {useState, useEffect} from "react"

export default function useGithubUser(name) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errore, setErrore] = useState(null)


    async function fetchData(name) {

        setLoading(true)
        setErrore(null)
        try {
            const response =  await fetch(`https://api.github.com/users/${name}`)
        const json = await response.json()
        setData(json)
        } catch (err) {
            setErrore(err)
            setData(null)
        } finally {
            setLoading(false)
        }
        }

    useEffect(() => {

     fetchData(name)

    }, [name])

    return {
        data, loading, errore
    }
}