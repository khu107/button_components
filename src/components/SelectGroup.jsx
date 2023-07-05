import { styled } from 'styled-components';
import Select from './select/Select';

function SelectGroup() {
  return (
    <div>
      <Wrapper>
        <h2>Select</h2>
        <Select />
      </Wrapper>
    </div>
  );
}

export default SelectGroup;

const Wrapper = styled.div`
  padding-top: 20px;
  position: relative;
  z-index: 2;
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
`;
