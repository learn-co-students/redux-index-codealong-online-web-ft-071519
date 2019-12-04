import React, { Component } from 'react';
import { connect } from 'react-redux'
//  Import the presentational component to the container.
import Todo from "./Todo"

class TodosContainer extends Component {
    // Map over the todos that are were passed from state to props and 
    // call the Todo presentational component and pass in individual todo items.
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);