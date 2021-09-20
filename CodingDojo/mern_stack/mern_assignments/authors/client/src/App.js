import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {Router} from '@reach/router'
import Update from './components/Update';
import Delete from './components/Delete';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Main default/>
        <Create path="/new"/>
        <Detail path="/authors/:id"/>
        <Update path="/authors/:id/edit" />
        <Delete path="/authors/:id/delete" />
      </Router>
    </div>
  );
}

export default App;
