import { css, styled } from 'styled-components';

export const Btn = styled.button`
  border: none;
  cursor: pointer;

  border-radius: 8px;
  color: rgb(0, 0, 0);
  background-color: rgb(85, 239, 196);
  font-size: 13px;
  font-weight: bold;
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 200px;
      height: 50px;
      background-color: white;
      border: 3px solid rgb(85, 239, 196);
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 130px;
      height: 45px;
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      width: 100px;
      height: 40px;
    `}
`;
