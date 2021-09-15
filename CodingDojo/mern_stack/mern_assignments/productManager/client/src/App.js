import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {Router} from '@reach/router'
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="products/:id"/>
        <Update path="products/:id/edit" />
        <Delete path="products/:id/delete" />
      </Router>
    </div>
  );
}

export default App;
