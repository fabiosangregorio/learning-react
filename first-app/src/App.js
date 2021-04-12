import React, { Component } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy milk"},
      {id: 2, content: "play mario"}
    ]
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    })
  }

  addTodo = todo => {
    todo.id = Math.random();
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
