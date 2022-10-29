import React from 'react';
import Welcome from '../BasicConcepts/Welcome';

export default class InteractiveWelcome extends React.Component {

    state = {
        text: ""
    }

    handleInputChange = (e) => {
       const value = e.target.value;
       this.setState({
        text: value
       })
    }
    
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleInputChange}/>
        <Welcome name={this.state.text}/>
      </div>
    )
  }
}
