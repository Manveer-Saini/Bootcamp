import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Tabs from './components/Tabs';
import DisplayContent from './components/DisplayContent';

function App() {
  // Each Tab will have 2 key value pairs: label and content.
  const [theTab, setTheTab] = useState([])
  const [tabContent, setTabContent] = useState("");

  return (
    <div className="App">
      <Form theTab={theTab} setTheTab={setTheTab} />
      <Tabs theTab={theTab} setTabContent={setTabContent} />
      <DisplayContent tabContent={tabContent} />
    </div>
  );
}

export default App;
