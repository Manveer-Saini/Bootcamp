import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="products/:id"/>
      </Router>
    </div>
  );
}

export default App;
