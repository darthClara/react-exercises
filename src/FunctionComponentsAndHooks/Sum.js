import React from "react";

export default function Sum(props) {
    const numeri = [...props.numeri]

    let total = numeri.reduce((previous, next) => {
      return previous + next
    })

  return <h1>risultato: {total}</h1>
}

Sum.defaultProps = {
    numeri: [3, 4, 2]
  }