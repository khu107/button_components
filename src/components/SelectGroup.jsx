import { styled } from 'styled-components';
import Select from './select/Select';
import { useState } from 'react';

export default function SelectGroup() {
  const [list] = useState(['java', 'spring', 'node', 'react']);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const handleToggle1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
    setToggle1(false);
  };

  const handleListClick1 = (item) => {
    setVal1(item);
    setToggle1(false);
  };

  const handleListClick2 = (item) => {
    setVal2(item);
    setToggle2(false);
  };

  return (
    <SelectWrap>
      <h2>Select</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div>
          <Select toggle={toggle1} setToggle={handleToggle1}>
            {val1 || 'java'}
          </Select>
          {toggle1 && (
            <ListWrap hid={'absolute'}>
              {list.map((e, i) => (
                <List key={i} onClick={() => handleListClick1(e)}>
                  {e}
                </List>
              ))}
            </ListWrap>
          )}
        </div>
        <div>
          <Select toggle={toggle2} setToggle={handleToggle2}>
            {val2 || 'java'}
          </Select>
          {toggle2 && (
            <ListWrap>
              {list.map((e, i) => (
                <List key={i} onClick={() => handleListClick2(e)}>
                  {e}
                </List>
              ))}
            </ListWrap>
          )}
        </div>
      </div>
    </SelectWrap>
  );
}

const SelectWrap = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
  overflow: hidden;
`;

const ListWrap = styled.div`
  border: 1px solid rgb(221, 221, 221);
  margin-top: 15px;
  position: ${(props) => props.hid};
  display: block;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;

const List = styled.div`
  line-height: 2;
  padding-left: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #c4bebe;
    cursor: pointer;
  }
`;
