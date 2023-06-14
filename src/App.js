import { useState } from "react";
import "./App.css";

const App = () => {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [done, setDone] = useState([
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
    const newToDo = {
      id: toDo.length + 1,
      title,
      content,
      isDone: false,
    };

    setToDo([...toDo, newToDo]);
  };

  // 삭제 버튼 - 1
  const clickRemoveButtonHandler1 = (id) => {
    const newToDos = toDo.filter((toDo) => toDo.id !== id);
    setToDo(newToDos);
  };

  // 삭제 버튼 - 2
  const clickRemoveButtonHandler2 = (id) => {
    const newDoneDelete = done.filter((done) => done.id !== id);
    setDone(newDoneDelete);
  };

  // 완료 버튼 - done
  const clickDoneButtonHandler = (id) => {
    const newToDo = toDo.filter((toDo) => toDo.id !== id);
    setToDo(newToDo);

    const newDone = toDo.find((toDo) => toDo.id === id);
    setDone([...done, newDone]);
  };

  // 취소 버튼 - cancel
  const clickCancelButtonHandler = (id) => {
    const newDones = done.filter((done) => done.id !== id);
    setDone(newDones);

    const newToDos = done.find((done) => done.id === id);
    setToDo([...toDo, newToDos]);
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
            <button onClick={clickAddButtonHandler} className="input-button">
              추가하기
            </button>
          </div>
        </div>
        <div className="list-container">
          <h1 className="todo-title">Working..🏋</h1>
          <div className="wrapper">
            {toDo.map((item) => (
              <div className="todo-container" key={item.id}>
                <div>
                  <div>
                    <h2>{item.title}</h2>
                    <h5>{item.content}</h5>
                  </div>
                  <div className="todo-button">
                    <button
                      onClick={() => clickDoneButtonHandler(item.id)}
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
            ))}
          </div>
          <h1 className="todo-title">Done!!🙈</h1>
          <div className="wrapper">
            {done.map((item) => (
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
                      {/* 조건부 랜더링 */}
                      {(item.isDone = true ? "취소" : "완료")}
                    </button>
                    <button
                      onClick={() => clickRemoveButtonHandler2(item.id)}
                      className="delete-button"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
