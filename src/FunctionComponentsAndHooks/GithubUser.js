import { useEffect, useState } from "react";


export function GithubUser({username}) {

    const [data, setData] = useState(null)


    async function fetchData(username) {

        const response =  await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setData(json)

        }


    useEffect(() => {

     fetchData(username)

    }, [username])



return(
    <div>
    {data && <h1>{data.name}</h1>}
    </div>
)

}

