import { useState } from 'react';
import ButtonTag from './button/ButtonTag';
import Modal from './modal/Modal';
import { styled } from 'styled-components';

function ModalGroup() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  return (
    <ModalGroupWrap>
      <ButtonTag
        size="small"
        bg="var(--btn1-bg-border-color)"
        onClick={() => setModal(true)}
      >
        open modal
      </ButtonTag>
      <Modal size="medium" onClose={() => setModal(true)} open={modal}>
        <div>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </div>
        <ModalBtnFlex>
          <ButtonTag
            onClick={() => setModal(false)}
            size="small"
            color="red"
            bg="var(--btn2-bg-border-color)"
          >
            닫기
          </ButtonTag>
          <ButtonTag size="small" bg="var(--btn1-bg-border-color)">
            확인
          </ButtonTag>
        </ModalBtnFlex>
      </Modal>
      <ButtonTag
        size="large"
        color="red"
        boxborder="rgb(250, 177, 160)"
        onClick={() => setModal1(true)}
      >
        open modal
      </ButtonTag>
      <Modal size="large" open={modal1} onClose={() => setModal1(false)}>
        <div>
          닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.
        </div>
        <Btn onClick={() => setModal1(false)}>x</Btn>
      </Modal>
    </ModalGroupWrap>
  );
}

export default ModalGroup;

const ModalGroupWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalBtnFlex = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const Btn = styled.button`
  cursor: pointer;
  border-radius: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;
