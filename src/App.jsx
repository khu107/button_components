import './App.css';
import ButtonGroup from './components/ButtonGroup';

import InputTag from './components/input/InputTag';

function App() {
  return (
    <>
      <ButtonGroup />
      <h2>Input</h2>
      <label htmlFor="">이름</label>
      <InputTag />
      <label htmlFor="">name</label>
      <InputTag />{' '}
    </>
  );
}

export default App;
