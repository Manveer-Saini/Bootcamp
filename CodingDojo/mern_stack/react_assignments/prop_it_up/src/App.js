import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"John"}
        lastName={"Doe"}
        age={34}
        hairColor={"Blue"}
      />

      <PersonCard
        firstName={"Jenny"}
        lastName={"Austin"}
        age={23}
        hairColor={"Black"}
      />

      <PersonCard
        firstName={"Michael"}
        lastName={"Scott"}
        age={44}
        hairColor={"Red"}
      />

      <PersonCard
        firstName={"Harry"}
        lastName={"Thomas"}
        age={14}
        hairColor={"Green"}
      />
    </div>
  );
}

export default App;
