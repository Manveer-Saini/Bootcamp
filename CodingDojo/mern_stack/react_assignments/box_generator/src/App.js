import { useState } from 'react';
import Form from './components/Form';
import DisplayBox from './components/DisplayBox';
import './App.css';

function App() {
  const [boxList, setBoxList] = useState([]);
  
  return (
    <div className="App">
      <Form boxList={boxList} setBoxList={setBoxList} />
      <DisplayBox boxList={boxList} />
    </div>
  );
}

export default App;
