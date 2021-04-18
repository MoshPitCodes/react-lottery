import "./App.css";
import Lottery from "./components/Lottery/Lottery";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Lottery" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
