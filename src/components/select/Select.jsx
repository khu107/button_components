import { styled } from 'styled-components';

export default function Select({ children, setToggle, toggle }) {
  return (
    <Btn
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div>{children}</div>
      <div>▼</div>
    </Btn>
  );
}
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
