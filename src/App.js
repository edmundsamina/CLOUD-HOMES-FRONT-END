import "./App.css";
import { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js";
import useFetchSearch from "./hooks/useFetchSearch";
import DropDown from "./components/DropDown/DropDown";
import { v4 as uuidv4 } from 'uuid';

function App() {
  //input captures the state of the input as the user types
  const [inputData, setinputData] = useState("");
  //second state to only pass through the input state once the user clicks send, otherwise the useFetch is triggered everytime they type
  const [onClickData, setOnClickData] = useState("")
  //second paramter of the fetch request, if false then fetches homes for sale
  const [rentBoolean, setRentBoolean]= useState()
  //extracting the original fetch data and updating it to avoid the double click
  const [housesArray] = useFetchSearch(onClickData, 'metaverse', rentBoolean);
  const [sortState, setSortState] = useState("none");
  const [propertyType, setPropertyType] = useState("");
  const [bedroomNumber, setBedroomNumber] = useState("")

  console.log(housesArray)
  const propertyTypeOptions = [
    "House",
    "Flat",
    "Bungalow",
    "Cottage",
    "Tent",
    "Estate",
    "Cave",
  ];



  const bedroomOptions = ["Studio","1","2","3","4","5+"]
 
  //sets the rent boolean to be false, because we want homes to buy and also passes the input data once completed
  function clickHandlerBuy(e) {
    e.preventDefault();
    setOnClickData(inputData)
    setRentBoolean(false)
 
  }
//sets the rent boolean to be true
  function clickHandlerRent(e) {
    e.preventDefault();
    setRentBoolean(true)
    setOnClickData(inputData)

  }


  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price < b.price ? -1 : 1) },
    descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
  };

  return (
    <div className="App">
    <Navbar/>
    <div className="landing-page">
      
     <Search onClickBuy={clickHandlerBuy} onClickRent={clickHandlerRent} onChange={(e) => {
          setinputData(e.target.value);
        }} />
    </div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Price: Lowest to Highest</option>
        <option value="descending">Price: Highest to Lowest</option>
      </select>{" "}
      <DropDown
        array={propertyTypeOptions}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      <DropDown
        array={bedroomOptions}
        onChange={(e) => setBedroomNumber(e.target.value)}
      />
      <div className="grid-parent">     
      <div className="cardContainer">{housesArray.sort(sortMethods[sortState].method).map((item) => {
        return (
          <Card
            key={uuidv4()}
            image={item.image}
            name={item.name}
            desc={item.desc}
            location={item.location}
            price={item.price}
            rent={item.rent}
            bedrooms={item.bedrooms}
            bathrooms={item.bathrooms}
            garden ={item.garden}
            metaverse ={item.metaverse}
            city={item.city}
          />
        );
      })}</div>
      </div> 
      </div>
  );
}

export default App;
