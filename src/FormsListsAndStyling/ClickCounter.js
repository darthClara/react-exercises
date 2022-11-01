import React, { useState } from "react";

// export default class ClickCounter extends React.Component {

//     state = {
//         numero: 0
//     }

//     handleClick = () => {
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Clicker counter: {this.state.numero}</h1>
//                 <button onClick={this.handleClick}>INCREMENTA</button>
//             </div>
//         )
//     }
// }

export default function ClickCounter() {

    // state = {
    //     numero: 0
    // }

    // handleClick = () => {
    //     setState({
    //         numero: state.numero + 1
    //     })
    // }

    const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero(numero + 1)
    }

        return (
            <div>
                <h1>Clicker counter: {numero}</h1>
                <button onClick={handleClick}>INCREMENTA</button>
            </div>
        )
}