import './App.css';
import Navbar from "./components/navBar/Navbar";
import Landing from "./components/landingPage/Landing";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Search /> 
      <Card/>
    </div>
  );
}

export default App;
