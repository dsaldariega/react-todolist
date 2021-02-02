import React from "react";

const Todo = ({ text, deleteTodoHandler }) => {
  return (
    <div>
      <li>{text}</li>
      <button>Update</button>
      <button onClick={deleteTodoHandler}>Delete</button>
    </div>
  );
};

export default Todo;
