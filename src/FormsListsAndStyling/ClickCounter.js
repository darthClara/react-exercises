import React, { useState, useEffect } from "react";

export default function ClickCounter(props) {

    const [numero, setNumero] = useState(0);

    
    useEffect(() => {
        props.onCounterChange(numero)
        }, [numero, props]);
        
    function handleClick() {
        setNumero(numero + 1)
    };

        return (
            <div>
                <h1>Clicker counter: {numero}</h1>
                <button onClick={handleClick}>INCREMENTA</button>
            </div>
        )
}


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