import React from "react";

const Todo = ({ dataId, text, deleteTodoHandler }) => {
  return (
    <div>
      <li>{text}</li>
      <button>Update</button>
      <button onClick={() => deleteTodoHandler(dataId)}>Delete</button>
    </div>
  );
};

export default Todo;
