import React from "react";
import "./ToDo.css";

const ToDo = ({ item, clickCancelButtonHandler, clickRemoveButtonHandler }) => {
  return (
    <div className="todo-container" key={item.id}>
      <div>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.content}</h2>
        </div>
        <div className="todo-button">
          <button
            className="complete-button"
            onClick={() => clickCancelButtonHandler(item.id)}
          >
            {item.isDone ? "↩️" : "✔️"}
          </button>
          <button
            className="delete-button"
            onClick={() => clickRemoveButtonHandler(item.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
