import { Btn } from './style';

function ButtonTag({ size, children, onClick, color, bg, boxborder }) {
  return (
    <Btn
      onClick={onClick}
      size={size}
      color={color}
      boxborder={boxborder}
      bg={bg}
    >
      {children}
    </Btn>
  );
}

export default ButtonTag;
