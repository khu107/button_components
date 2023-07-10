import { Input } from './style';
function InputTag({ type, value, onChange }) {
  return <Input value={value} type={type} onChange={onChange} />;
}

export default InputTag;
