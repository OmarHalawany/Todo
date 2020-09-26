import React, { Component } from "react";
import "../css/AddTodo.css";

class AddTodo extends Component {
  newTodo = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = this.newTodo.current.value;
    if (newTodo === null || newTodo.match(/^ *$/) !== null) {
      return;
    }
    this.props.handleAddTodo(newTodo);
    newTodo = "";
  };

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            ref={this.newTodo}
            type="text"
            id="newTodo"
            placeholder="Add new todo . . ."
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Add todo
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
