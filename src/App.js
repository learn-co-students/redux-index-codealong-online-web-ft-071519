import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'
// import { connect } from "react-redux"

class App extends Component {

  render() {
    return (
      <div className="App">
        <CreateTodo />
        <TodosContainer />
      </div>
    );
  }
}


export default App;
// export default connect(mapStateToProps)(App);
