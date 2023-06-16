import React from "react";
import ToDo from "../ToDo/ToDo";
import "./TodoForm.css";

const TodoForm = ({
  toDo,
  clickCancelButtonHandler,
  clickRemoveButtonHandler,
}) => {
  return (
    <div className="list-container">
      <h1 className="todo-title">Working..🏋</h1>
      <div className="wrapper">
        {toDo.map((item) => {
          if (item.isDone === false) {
            return (
              <ToDo
                item={item}
                clickCancelButtonHandler={clickCancelButtonHandler}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
                key={item.id}
              />
            );
          }
          return null;
        })}
      </div>
      <h1 className="todo-title">Done!!🙈</h1>
      <div className="wrapper">
        {toDo.map((item) => {
          if (item.isDone === true) {
            return (
              <ToDo
                item={item}
                clickCancelButtonHandler={clickCancelButtonHandler}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
                key={item.id}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TodoForm;
