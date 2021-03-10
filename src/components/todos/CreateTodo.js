import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
      text: '',
    };
  

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({type: "ADD_TODO", payload: this.state})
    this.setState({
      text: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

export default connect()(CreateTodo);
