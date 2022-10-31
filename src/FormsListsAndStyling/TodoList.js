import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: ["uno", "due"],
    newitems: "",
  };

  inputHandler = (e) => {
    const valore = e.target.value;
    this.setState({
      newitems: valore,
    });
  };

  clickHandler = () => {
    if (this.state.newitems) {
      this.setState({
        items: this.state.items.concat([this.state.newitems]),
      });
      this.refs.listItem.value = "";
    } else {
      alert("insert a new item");
    }
  };

  resetHandler = () => {
    this.refs.listItem.value = "";
    const unorderedList = document.getElementById("unorderedList");
    while (unorderedList.hasChildNodes()) {
        unorderedList.removeChild(unorderedList.firstChild);
      }
  };

  removeHandler = (e) => {
    e.preventDefault();
    const item = (e.target).parentElement;
    item.remove();
  }

  render() {
    return (
      <div>
        <h3>LISTA:</h3>
        <ul id="unorderedList">
            {this.props.render(this.state.items, this.removeHandler)}
        </ul>
        <input
          ref="listItem"
          placeholder="Add a new item"
          type="text"
          onChange={this.inputHandler}
        />
        <input type="button" value="ADD" onClick={this.clickHandler} />
        <input type="button" value="RESET" onClick={this.resetHandler} />
      </div>
    );
  }
}
