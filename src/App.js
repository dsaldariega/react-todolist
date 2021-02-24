import "./App.css";
import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
      todos: [],
    };
  }

  inputTextHandler = (e) => {
    const { value } = e.target;
    this.setState({ todoInput: value });
    console.log(value);
  };
  //working add todo
  addTodoHandler = () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const { todoInput, todos } = this.state;
    this.setState({
      ...this.state,
      todoInput: "",
      todos: [...todos, { id, name: todoInput }],
    });
  };

  //working delete todo
  deleteTodoHandler = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    console.log(id)
    
  };

  completeTodoHandler = () => {
    // const todos = this.state.todos.map((todo) => {
    //   if(todo.id === todo.id){
    //     return{
    //       ...item, completed: !item.completed
    //     }
    //   }
    //   return item;
    // }))
    
    
    // this.setState({todos})
  }

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
