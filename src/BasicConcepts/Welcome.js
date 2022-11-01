import React from "react";
import Age from "./Age";

// export default class Welcome extends React.Component {

//     render() {
//         return (
//             <div className="welcome">
//                 <p>
//                     Welcome, {this.props.name}!
//                 </p>
//                 {this.props.age &&  this.props.age <= 65 && this.props.name === "John" && <Age age={this.props.age}/>}
//             </div>
//         )
//     }
// }


export default function Welcome(props) {  
        return (
            <div className="welcome">
                <p>
                    Welcome, {props.name}!
                </p>
                {props.age &&  props.age <= 65 && props.name === "John" && <Age age={props.age}/>}
            </div>
        )
}