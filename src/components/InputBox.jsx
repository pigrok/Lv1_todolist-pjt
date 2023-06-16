import React from "react";
import Button from "./Button";

const InputBox = ({
  title,
  content,
  titleChangeHandler,
  contentChangeHandler,
  clickAddButtonHandler,
}) => {
  return (
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
  );
};

export default InputBox;
