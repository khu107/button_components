import { css, styled } from 'styled-components';
export const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background-color: rgb(221, 221, 221);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  z-index: 1000;
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 500px;
      height: 300px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 300px;
      height: 200px;
    `}
`;
