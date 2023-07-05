import './App.css';
import ButtonGroup from './components/ButtonGroup';
import InputGroup from './components/InputGroup';
import ModalGroup from './components/ModalGroup';
import SelectGroup from './components/SelectGroup';

function App() {
  return (
    <>
      <h2>Button</h2>
      <ButtonGroup />
      <h2>input</h2>
      <InputGroup />
      <h2>Modal</h2>
      <ModalGroup />
      <h2>Select</h2>
      <SelectGroup />
    </>
  );
}

export default App;
