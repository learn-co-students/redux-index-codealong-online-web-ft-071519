import React, { Component } from "react";
import { connect } from "react-redux"
import Todo from "./Todo"

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, index) => <Todo key={index} text={todo}/>)

    render() {
        console.log(this.props)
        return (
        <div>
            <ul>{this.renderTodos()}</ul>
        </div>
        )
    }
}

export default connect(state => ({todos: state.todos}))(TodosContainer)