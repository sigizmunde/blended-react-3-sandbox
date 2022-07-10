import React from 'react';
import css from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { overview, closeModal } = this.props;
    return (
      <div className={css.backdrop} onClick={closeModal}>
        <div className={css.modal}>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
