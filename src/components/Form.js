import React from "react";

const Form = ({ submitTodoHandler, inputTextHandler }) => {
  

  return (
    <div>
      <input type="text" onChange={inputTextHandler}/>
      <button type="submit" onClick={submitTodoHandler}>
        +
      </button>
    </div>
  );
};

export default Form;
