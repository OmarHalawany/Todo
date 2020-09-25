import React, { Component } from "react";
import "../css/TodoList.css";

class TodoList extends Component {
  getCheckStyle = (todo) => {
    return todo.completed ? { color: "green" } : { color: "#fcdab7" };
  };
  getTextStyle = (todo) => {
    return todo.completed
      ? { color: "#80808080", textDecoration: "line-through" }
      : { color: "#fcdab7" };
  };
  render() {
    return (
      <React.Fragment>
        <div className="List">
          {this.props.todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <p className="todo-text" style={this.getTextStyle(todo)}>
                {todo.content}
              </p>
              <div className="control-todo">
                <i
                  style={this.getCheckStyle(todo)}
                  onClick={() => this.props.handleCheck(todo)}
                  className="fas fa-check"
                ></i>
                <i
                  onClick={() => this.props.handleDelete(todo)}
                  className="fas fa-trash"
                ></i>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
