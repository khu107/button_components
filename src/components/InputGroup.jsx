import { useState } from 'react';
import ButtonTag from './button/ButtonTag';
import InputTag from './input/InputTag';

const style = { display: 'flex', gap: '30px' };

function InputGroup() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(formattedValue);
  };
  const btnHandler = () => {
    const Obj = {
      name,
      price,
    };
    if (Obj.name === '' && Obj.price === '') {
      alert('이름과 가격 모두 입력해주세요.');
    } else {
      alert(`name: ${Obj.name}, price: ${Obj.price}`);
    }
  };
  return (
    <div style={style}>
      <div>
        <label htmlFor="">이름</label>
        <InputTag value={name} onChange={nameHandler} type="text" />
      </div>
      <div>
        <label htmlFor="">가격</label>
        <InputTag value={price} onChange={priceHandler} type="text" />
      </div>
      <ButtonTag bg="rgb(85, 239, 196)" onClick={btnHandler} size="small">
        {' '}
        확인
      </ButtonTag>
    </div>
  );
}

export default InputGroup;
