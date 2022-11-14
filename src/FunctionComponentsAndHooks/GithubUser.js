import { useEffect, useState } from "react";
import useGithubUser from "./useGithubUser";

export function GithubUser({username}) {
   const {data} = useGithubUser()

return(
    <div>
    {data && <h1>{data.name}</h1>}
    </div>
)

}

