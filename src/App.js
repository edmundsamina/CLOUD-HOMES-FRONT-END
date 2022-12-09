import './App.css';
import { useState } from 'react';
import Navbar from "./components/navBar/Navbar";
import Landing from "./components/landingPage/Landing";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js"
import useFetchSearch from './hooks/useFetchSearch';
import useFetch from './hooks/useFetch';
import { v4 as uuidv4 } from 'uuid' 

function App() {
  const [ housesArray, setHousesArray ] = useFetch();
  const [inputData, setinputData] = useState("");
  const [searchData, setSearchData] = useState("")
  const [ results ] = useFetchSearch(searchData);


function clickHandler(e){
  e.preventDefault()
  setSearchData(inputData)
  setHousesArray(results)
}

// function onChangeHandler(e){
//   setinputData(e.target.value)
//   console.log(inputData)
// }
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Search onChange={(e)=>{setinputData(e.target.value)}} onClick={clickHandler} /> 
      <Card key = {uuidv4} housesArray = {housesArray}/>
    </div>
  );
}

export default App;
