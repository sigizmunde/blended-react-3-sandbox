import css from './Button.module.css';

const Button = ({ caption, handleClick }) => {
  return (
    <button
      type="button"
      className={css['center-button']}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
};

export default Button;
