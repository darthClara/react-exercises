// import React from "react";
// import CounterDisplay from "./CounterDisplay";

// export default class Counter extends React.Component {
    
//     state = {
//         numero: this.props.numeroIniziale,
//     };

//     componentDidMount() {
//         this.timer = setInterval(
//           () => this.setState({
//             numero: this.state.numero + this.props.incremento,
//         }),
//           this.props.intervallo
//         );
//       }

//       componentWillUnmount() {
//         clearInterval(this.timer);
//       }


//     render() {
//         return (
//             <div>
//                 <CounterDisplay numero={this.state.numero}/>
//             </div>
//         )
//     }
// }


import CounterDisplay from "./CounterDisplay";
import React, { useEffect, useState } from "react";

export default function Counter() {

const [ counter, setCounter ] = useState(0)

useEffect(() => {
    const clear = setInterval(() => {
        setCounter(counter + 1)
    }, 1000);
    return () => clearInterval(clear)
}, [counter])




  return (
    <div>
        <CounterDisplay numero={counter}/>
    </div>
  )
}