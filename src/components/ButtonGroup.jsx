import ButtonTag from './button/ButtonTag';
import { ReactComponent as Bell } from '../assets/svg/bell.svg';
import { ReactComponent as Chevron } from '../assets/svg/chevron-compact-right.svg';
const LargeFlex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '7px',
};
function ButtonGroup() {
  return (
    <>
      <h2>Button</h2>
      <div className="BtnBox">
        <ButtonTag
          boxborder="rgb(85, 239, 196)"
          onClick={() => alert('버튼을 만들어보세요')}
          size="large"
        >
          <div style={LargeFlex}>
            Large Primary Button
            <Chevron />
          </div>
        </ButtonTag>
        <ButtonTag bg="rgb(85, 239, 196)" size="medium">
          Medium
        </ButtonTag>
        <ButtonTag bg="rgb(85, 239, 196)" size="small">
          Small
        </ButtonTag>
      </div>
      <div className="BtnBox">
        <ButtonTag
          boxborder="rgb(250, 177, 160)"
          onClick={() => prompt('어렵나요?')}
          color="rgb(214, 48, 49)"
          size="large"
        >
          <div style={LargeFlex}>
            Large Primary Button
            <Bell />
          </div>
        </ButtonTag>
        <ButtonTag bg="rgb(250, 177, 160)" color="red" size="medium">
          Medium
        </ButtonTag>
        <ButtonTag bg="rgb(250, 177, 160)" color="red" size="small">
          Small
        </ButtonTag>
      </div>
    </>
  );
}

export default ButtonGroup;
