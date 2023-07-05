import { css, styled } from 'styled-components';
export const ModalOpacity = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

export const ModalWrapper = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  position: absolute;
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
