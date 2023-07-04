import { Input } from './style';
function InputTag({ type, value, onChange }) {
  console.log(value);
  console.log();
  return <Input value={value} type={type} onChange={onChange} />;
}

export default InputTag;
