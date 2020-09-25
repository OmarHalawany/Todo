import React, { Component } from "react";
import "../css/AddTodo.css";

class AddTodo extends Component {
  /*state = {
    newTodo: "",
  }; (first solution)*/
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.handleAddTodo(this.state.newTodo); (first solution)
    //second solution better cuz its easy to reset input>>

    let inpt = document.getElementById("newTodo");
    if (inpt.value === null || inpt.value.match(/^ *$/) !== null) {
      return;
    }
    let newTodo = inpt.value;
    inpt.value = "";
    this.props.handleAddTodo(newTodo);
  };

  /*
  first solution
  handleNewTodo = (e) => {
    let newTodo = { ...this.state.newTodo };
    newTodo = e.target.value;
    this.setState({ newTodo });
  };*/

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="newTodo"
            placeholder="Add new todo . . ."
            /*onChange={this.handleNewTodo} (first solution)*/
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
