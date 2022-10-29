import React from "react";

export default class TodoList extends React.Component {

  state = {
    items: ["uno", "due"],
    newitems: ""
  };

  inputHandler = (e) => {
    const valore = e.target.value;
    this.setState({
        newitems: valore
    })
    };

    clickHandler = () => {
        if(this.state.newitems) {
            this.setState({
                items: this.state.items.concat([this.state.newitems]),
            });
            this.refs.listItem.value="";
        } else {alert("insert a new item")}
    };

  render() {
    return (
      <div style={{ border: "1px solid black", margin: "20px 0px 20px 0px" }}>
        <h3>LISTA:</h3>
        <ul>
          {this.state.items.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
        <input
          ref="listItem"
          placeholder="Add a new item"
          type="text"
          onChange={this.inputHandler}
        />
        <input type="button" value="ADD" onClick={this.clickHandler}/>
      </div>
    );
  }
}
