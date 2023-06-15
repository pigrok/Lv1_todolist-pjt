const Button = ({ clickAddButtonHandler }) => {
  return (
    <button onClick={clickAddButtonHandler} className="input-button">
      추가하기
    </button>
  );
};

export default Button;
