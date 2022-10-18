import React from "react";

export default function Age(props) {
    return (
            <div>
                {props.age >= 18 ? <p>Your age is {props.age}</p> : <p>You are very young!</p>}
            </div>
    )
}