import { useState } from 'react';
import ButtonTag from './button/ButtonTag';
import Modal from './modal/Modal';
import { styled } from 'styled-components';

function ModalGroup() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const closeModal = () => {
    setModal1();
  };
  return (
    <ModalGroupWrap>
      <ButtonTag
        size="small"
        bg="rgb(85, 239, 196)"
        onClick={() => setModal(true)}
      >
        open modal
      </ButtonTag>
      {modal && (
        <Modal onClose={closeModal} size="medium">
          <div>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </div>
          <ModalBtnFlex>
            <ButtonTag
              onClick={() => setModal(false)}
              size="small"
              bg="rgb(250, 177, 160)"
            >
              닫기
            </ButtonTag>
            <ButtonTag size="small" bg="red">
              확인
            </ButtonTag>
          </ModalBtnFlex>
        </Modal>
      )}
      <ButtonTag
        onClick={() => setModal1(true)}
        size="large"
        color="red"
        boxborder="rgb(250, 177, 160)"
      >
        open modal
      </ButtonTag>
      <div>
        {modal1 && (
          <Modal onClose={closeModal} size="large">
            <div>
              닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.
            </div>
            <Btn onClick={() => setModal1(false)}>x</Btn>
          </Modal>
        )}
      </div>
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
