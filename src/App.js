import './App.css';
import { useState,useEffect } from 'react';
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
  const [sortLowHigh, setSortLowHigh] = useState(true)


function clickHandler(e){
  e.preventDefault()
  setSearchData(inputData)
  setHousesArray(results)
}


useEffect(() => {
if(sortLowHigh===true){
housesArray.sort((a, b) => (a.price - b.price) )
}
else {
  housesArray.sort((a, b) => (a.price - b.price) )
}
console.log(sortLowHigh)
}
, [sortLowHigh]);


  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Search onChange={(e)=>{setinputData(e.target.value)}} onClick={clickHandler} /> 
      <select onChange={(e)=>{setSortLowHigh(e.target.value)}}>
        <option value={true}>Price: Lowest to Highest</option>
        <option value={false}>Price: Highest to Lowest</option>
      </select>
      <Card key = {uuidv4} housesArray = {housesArray}/>
    </div>
  );
}

export default App;
