import css from './Modal.module.css';

const Modal = ({ overview, closeModal }) => {
  return (
    <div className={css.backdrop} onClick={closeModal}>
      <div className={css.modal}>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Modal;
