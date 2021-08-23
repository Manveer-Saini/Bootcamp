import { useState } from 'react';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import './App.css';

function App() {
  const [theList, setTheList] = useState([]);
  
  return (
    <div className="App">
      {/* Features: Add new item to List */}
      <Form theList={theList} setTheList={setTheList} />
      {/* Features: Displays todo list elements, Complete todo items and delete todo items.  */}
      <DisplayList theList={theList} setTheList={setTheList} />  
    </div>
  );
}

export default App;
