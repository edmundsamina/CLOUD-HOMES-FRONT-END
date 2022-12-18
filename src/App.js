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
  const [sortState, setSortState] = useState("none");


function clickHandler(e){
  e.preventDefault()
  setSearchData(inputData)
  setHousesArray(results)
}

const sortMethods = {
  none: { method: (a, b) => null },
  ascending: { method: (a, b) => (a.price < b.price ? -1 : 1) },
  descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
};

// useEffect(() => {
// if(sortLowHigh===true){
// housesArray.sort((a, b) => (a.price - b.price) )
// }
// else {
//   housesArray.sort((a, b) => (a.price - b.price) )
// }
// console.log(sortLowHigh)
// }
// , [sortLowHigh, housesArray]);


  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Search onChange={(e)=>{setinputData(e.target.value)}} onClick={clickHandler} /> 
      <select  defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
       <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Price: Lowest to Highest</option>
        <option value="descending">Price: Highest to Lowest</option>
      </select> {
        housesArray.sort(sortMethods[sortState].method).map((item)=>{
          return  <Card key = {uuidv4} image = {item.image} name={item.name} desc={item.desc} location={item.location} price={item.price} rent={item.rent}/>
        })
      }
     
    </div>
  );
}

// {data.sort(sortMethods[sortState].method).map((el, i) => (
//   <li key={i}>{el}</li>
// ))}
export default App;
