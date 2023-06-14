import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <div className="header-container">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <div className="input-container">
          <div className="input-box">
            <div>
              제목 : &nbsp;
              <input />
            </div>
            <div>
              내용 : &nbsp;
              <input />
            </div>
          </div>
          <div>
            <button className="input-button">추가하기</button>
          </div>
        </div>
        <div className="todo-container">
          <div className="todo-title">Working..🏋</div>
          <div className="todo-box">
            <h2>리액트 공부하기</h2>
            <h5>
              리액트 입문 강의
              듣기wefwefewfewffewfwefewfddddddddddddddddddddddddddddd
            </h5>
            <div>
              <button className="list-button">완료</button>
              <button className="list-button">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
