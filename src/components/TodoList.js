import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoInfo, deleteTodoHandler }) => {
  return (
    <div>
      <ul>
        {todoInfo.map((data) => (
          <Todo deleteTodoHandler={deleteTodoHandler} key={data.id} dataId={data.id} text={data.name} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
