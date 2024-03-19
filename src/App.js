import "./App.css";
import Searchbar from "./component/Searchbar";
import Weather from "./component/Weather";

function App() {
  return (
    <div className="App">
      <div className="component-holder">
        <Searchbar />
        <Weather />
      </div>
    </div>
  );
}

export default App;
