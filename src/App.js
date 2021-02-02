import "./App.css";
import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
      todos: [{ id: "", name: "" }],
    };
  }

  inputTextHandler = (e) => {
    const { value } = e.target;
    this.setState({ todoInput: value });
    console.log(value);
  };

  addTodoHandler = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const { todoInput, todos } = this.state;
    this.setState({
      ...this.state,
      todoInput: "",
      todos: [...todos, { id, name: todoInput }],
    });
  };

  //working delete button
  deleteTodoHandler = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    console.log()
    
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form
          inputTextHandler={this.inputTextHandler}
          submitTodoHandler={this.addTodoHandler}
        />
        <TodoList
          todoInfo={this.state.todos}
          deleteTodoHandler={this.deleteTodoHandler}
        />
        <footer>TodoList 2020</footer>
      </div>
    );
  }
}
export default App;
