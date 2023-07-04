import { css, styled } from 'styled-components';

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  font-size: 13px;
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 200px;
      height: 50px;
      background-color: white;
      border: 3px solid ${(props) => props.boxborder};
      font-weight: bold;
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
