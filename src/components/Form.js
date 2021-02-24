import React from "react";

const Form = ({ submitTodoHandler, inputTextHandler }) => {
  return (
    <div>
      <input type="text" onChange={inputTextHandler} />
      <button type="submit" onClick={submitTodoHandler}>
        +
      </button>
      <select name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
  );
};

export default Form;
