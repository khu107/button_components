import { useState } from 'react';
import { Btn } from './style';

function ButtonTag({ size, children, clickhand }) {
  console.log(clickhand);
  return (
    <Btn onClick={clickhand} size={size}>
      {children}
    </Btn>
  );
}

export default ButtonTag;
