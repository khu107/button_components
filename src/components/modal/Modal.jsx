import { ModalOpacity, ModalWrapper } from './style';

function Modal({ size, children, onClose }) {
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOpacity onClick={handleClickOutside}></ModalOpacity>
      <ModalWrapper size={size}>{children}</ModalWrapper>
    </>
  );
}

export default Modal;
