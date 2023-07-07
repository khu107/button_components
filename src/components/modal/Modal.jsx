import ReactDOM from 'react-dom';
import { OVERLAY_STYLES, ModalWrapper } from './style';
export default function Modal({ size, open, children, onClose }) {
  if (!open) return null;
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <>
      <OVERLAY_STYLES onClick={handleOverlayClick} />
      <ModalWrapper size={size}>{children}</ModalWrapper>
    </>,
    document.getElementById('portal')
  );
}
