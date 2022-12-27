import "./App.css";
import { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js";
import useFetchSearch from "./hooks/useFetchSearch";
import DropDown from "./components/DropDown/DropDown";
import { v4 as uuidv4 } from 'uuid';
import { BiMenu } from 'react-icons/bi';
import FilterMenuModal from "./components/Modal/FilterMenuModal";

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
  const [propertyFilter, setPropertyFilter] = useState("none")
  //for hamburger pop up
  const [showModal, setShowModal] = useState(false);

  console.log(housesArray)
  const propertyTypeOptions = [
    "House",
    "Flat",
    "Cottage",
    "Themed",
  ];

  const bedroomOptions = ["none", "1","2","3","4","5+"]

  
 
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

  const filterMethods = {
    none: { method: house => Array},
    "1": { method: house => house.bedrooms === Number(propertyFilter)},
    "2": { method: house => house.bedrooms === Number(propertyFilter)},
    "3": { method: house => house.bedrooms === Number(propertyFilter)},
    "4": { method: house => house.bedrooms === Number(propertyFilter)},
   "5+": { method:  house => house.bedrooms > Number(propertyFilter[0])},
   "House": {method: house => house.property_type === propertyFilter.toLowerCase()},
    "Flat": {method: house => house.property_type === propertyFilter.toLowerCase()},
    "Bungalow": {method: house => house.property_type === propertyFilter.toLowerCase()},
    "Cottage": {method: house => house.property_type === propertyFilter.toLowerCase()},
    "Themed": {method: house => house.property_type === propertyFilter.toLowerCase()},

  };


  return (
    <div className="App">
    <Navbar/>
    <div className="landing-page">
      
     <Search onClickBuy={clickHandlerBuy} onClickRent={clickHandlerRent} onChange={(e) => {
          setinputData(e.target.value);
        }} />
    </div>
    <div className="filtering-container">
      Sort: <select className="sort-price"
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Price: Lowest to Highest</option>
        <option value="descending">Price: Highest to Lowest</option>
      </select>{" "}
      Advanced Search: <BiMenu onClick={() => setShowModal(true)} className="hamburger-menu"/>
      
      
      </div>
      <div className="grid-parent">     
      <div className="cardContainer">{housesArray.sort(sortMethods[sortState].method).filter(filterMethods[propertyFilter].method).map((item) => {
        return (
          <Card
            key={uuidv4()}
            image={item.image}
            name={item.name}
            desc={item.description}
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
      {showModal ? (
        <FilterMenuModal>
          <div id="pop-up-card">
           testing
           <DropDown
        array={propertyTypeOptions}
        onChange={(e) => setPropertyFilter(e.target.value)}
      />
       {/* bedroom number drop-down */}
      <DropDown
        array={bedroomOptions}
        onChange={(e) => setPropertyFilter(e.target.value)}
      />
              <button id="pop-up-button" onClick={() => setShowModal(false)}>Close</button>
            
          </div>
        
        </FilterMenuModal>
      ) : null}
      </div>
  );
}

export default App;
//.filter(house => house.bedrooms === bedroomNumber) studio - 4
//.filter(house => house.bedrooms >= Number(bedroomNumber)) 5+
//sort(sortMethods[sortState].method)