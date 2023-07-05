import { ModalOpacity, ModalWrapper } from './style';

function Modal({ size, children }) {
  return (
    <>
      <ModalOpacity></ModalOpacity>
      <ModalWrapper size={size}>{children}</ModalWrapper>
    </>
  );
}

export default Modal;
