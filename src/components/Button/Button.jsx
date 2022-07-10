const Button = ({ caption, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {caption}
    </button>
  );
};

export default Button;
