import { styled } from 'styled-components';
import {} from './style';
import { useState } from 'react';

function Select() {
  const [toogle, setToggle] = useState(false);

  const [list, setList] = useState([
    '리액트',
    '자바',
    '스프링',
    '리액트네이트비',
  ]);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Btn onClick={() => setToggle(!toogle)}>
          <div>{list[0]}</div>
          <div>▼</div>
        </Btn>

        <Ul>
          {toogle &&
            list.map((e, i) => {
              return <LI key={i}>{e}</LI>;
            })}
        </Ul>
      </div>
    </>
  );
}

export default Select;

const Btn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`;
const Ul = styled.ul`
  border: 1px solid black;
  margin-top: 10px;
  background-color: white;
  position: relative;
  z-index: 1;
  width: 300px;
  border-radius: 12px;
`;
const LI = styled.div`
  list-style: none;
  padding: 5px;
  &:hover {
    background-color: #ececec;
  }
`;
