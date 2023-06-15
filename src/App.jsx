import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  // useState를 통해 초기값을 설정
  const [toDo, setToDo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },

    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다. ",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // 추가 버튼
  const clickAddButtonHandler = () => {
    if (!title) {
      return alert("제목을 입력해주세요");
    } else if (!content) {
      return alert("내을 입력해주세요");
    }

    const newToDo = {
      id: toDo.length + 1,
      title,
      content,
      isDone: false,
    };

    setToDo([...toDo, newToDo]);

    setTitle(""); // 입력 필드 초기화
    setContent(""); // 입력 필드 초기화
  };

  // 삭제 버튼
  const clickRemoveButtonHandler1 = (id) => {
    const newToDoDelete = toDo.filter((toDo) => toDo.id !== id);
    setToDo(newToDoDelete);
  };

  // 취소 버튼 - cancel
  const clickCancelButtonHandler = (id) => {
    const newToDos = toDo.find((toDo) => toDo.id === id);

    if (newToDos) {
      newToDos.isDone = !newToDos.isDone;
      const newToDos2 = toDo.filter((toDo) => toDo.id !== id);
      setToDo([...newToDos2, newToDos]);
    }
  };

  return (
    <div className="App">
      <div class="container">
        <div className="header">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <div className="input-container">
          <div className="input-box">
            <div>
              제목 : &nbsp;
              <input value={title} onChange={titleChangeHandler} />
            </div>
            <div>
              내용 : &nbsp;
              <input value={content} onChange={contentChangeHandler} />
            </div>
          </div>
          <div>
            <Button clickAddButtonHandler={clickAddButtonHandler} />
          </div>
        </div>
        <div className="list-container">
          <h1 className="todo-title">Working..🏋</h1>
          <div className="wrapper">
            {toDo.map((item) => {
              if (item.isDone === false) {
                return (
                  <div className="todo-container" key={item.id}>
                    <div>
                      <div>
                        <h2>{item.title}</h2>
                        <h5>{item.content}</h5>
                      </div>
                      <div className="todo-button">
                        <button
                          onClick={() => clickCancelButtonHandler(item.id)}
                          className="complete-button"
                        >
                          완료
                        </button>
                        <button
                          onClick={() => clickRemoveButtonHandler1(item.id)}
                          className="delete-button"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <h1 className="todo-title">Done!!🙈</h1>
          <div className="wrapper">
            {toDo.map((item) => {
              if (item.isDone === true) {
                return (
                  <div className="todo-container" key={item.id}>
                    <div>
                      <div>
                        <h2>{item.title}</h2>
                        <h5>{item.content}</h5>
                      </div>
                      <div className="todo-button">
                        <button
                          onClick={() => clickCancelButtonHandler(item.id)}
                          className="complete-button"
                        >
                          {item.isDone ? "취소" : "완료"}
                        </button>
                        <button
                          onClick={() => clickRemoveButtonHandler1(item.id)}
                          className="delete-button"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
