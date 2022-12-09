import './App.css';
import Navbar from "./components/navBar/Navbar";
import Landing from "./components/landingPage/Landing";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Card/>
    </div>
  );
}

export default App;
