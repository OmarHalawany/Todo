import React, { Component } from "react";
import AddTodo from "./addTodo";
import "../css/App.css";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    id: 4,
    todos: [
      { id: 1, content: "Study React", completed: false },
      { id: 2, content: "Eat lunch", completed: false },
      { id: 3, content: "Work out", completed: false },
      { id: 4, content: "Sleep early", completed: false },
    ],
  };

  handleCheck = (todo) => {
    console.log(this.state);
    let todos = [...this.state.todos];
    let ind = todos.indexOf(todo);
    todos[ind] = { ...todos[ind] };

    todos[ind].completed
      ? (todos[ind].completed = false)
      : (todos[ind].completed = true);

    this.setState({ todos });
  };

  handleDelete = (todo) => {
    let todos = [...this.state.todos];
    todos = todos.filter((t) => t.id !== todo.id);
    this.setState({ todos });
  };

  handleAddTodo = (newTodoContent) => {
    let todos = [...this.state.todos];
    let id = this.state.id;
    id++;
    let newTodo = { id: id, content: newTodoContent, completed: false };
    todos.unshift(newTodo);
    console.log(todos);
    this.setState({ id, todos });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <h1 className="title">Todo List</h1>
          <AddTodo handleAddTodo={this.handleAddTodo} />
          <TodoList
            todos={this.state.todos}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
