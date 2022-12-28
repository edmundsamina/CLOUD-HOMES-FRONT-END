import "./App.css";
import { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js";
import useFetchSearch from "./hooks/useFetchSearch";
import DropDown from "./components/DropDown/DropDown";
import { v4 as uuidv4 } from "uuid";
import { BiMenu } from "react-icons/bi";
import FilterMenuModal from "./components/Modal/FilterMenuModal";

function App() {
  //input captures the state of the input as the user types
  const [inputData, setinputData] = useState("");
  //second state to only pass through the input state once the user clicks send, otherwise the useFetch is triggered everytime they type
  const [onClickData, setOnClickData] = useState("");
  //second paramter of the fetch request, if false then fetches homes for sale
  const [rentBoolean, setRentBoolean] = useState();
  //extracting the original fetch data and updating it to avoid the double click
  const [housesArray] = useFetchSearch(onClickData, "metaverse", rentBoolean);
  const [sortState, setSortState] = useState("none");
  const [propertyFilter, setPropertyFilter] = useState("none");
  //for hamburger pop up
  const [showModal, setShowModal] = useState(false);

  console.log(housesArray);
  const propertyTypeOptions = ["House", "Flat", "Cottage", "Themed"];

  const bedroomOptions = ["none", "1", "2", "3", "4", "5+"];

  //sets the rent boolean to be false, because we want homes to buy and also passes the input data once completed
  function clickHandlerBuy(e) {
    e.preventDefault();
    setOnClickData(inputData);
    setRentBoolean(false);
  }
  //sets the rent boolean to be true
  function clickHandlerRent(e) {
    e.preventDefault();
    setRentBoolean(true);
    setOnClickData(inputData);
  }

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price < b.price ? -1 : 1) },
    descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
  };

  const filterMethods = {
    none: { method: (house) => Array },
    1: { method: (house) => house.bedrooms === Number(propertyFilter) },
    2: { method: (house) => house.bedrooms === Number(propertyFilter) },
    3: { method: (house) => house.bedrooms === Number(propertyFilter) },
    4: { method: (house) => house.bedrooms === Number(propertyFilter) },
    "5+": { method: (house) => house.bedrooms > Number(propertyFilter[0]) },
    House: {
      method: (house) => house.property_type === propertyFilter.toLowerCase(),
    },
    Flat: {
      method: (house) => house.property_type === propertyFilter.toLowerCase(),
    },
    Bungalow: {
      method: (house) => house.property_type === propertyFilter.toLowerCase(),
    },
    Cottage: {
      method: (house) => house.property_type === propertyFilter.toLowerCase(),
    },
    Themed: {
      method: (house) => house.property_type === propertyFilter.toLowerCase(),
    },
  };

  return (
    <div className="App">
      <Navbar />
      <div className="landing-page">
        <Search
          onClickBuy={clickHandlerBuy}
          onClickRent={clickHandlerRent}
          onChange={(e) => {
            setinputData(e.target.value);
          }}
        />
      </div>
      <div className="filtering-container">
        <select
          className="dropdown"
          defaultValue={"DEFAULT"}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option className="option" value="DEFAULT" disabled>
            Sort by price
          </option>
          <option className="option" value="ascending">
            Price: Lowest to Highest
          </option>
          <option className="option" value="descending">
            Price: Highest to Lowest
          </option>
        </select>{" "}
        <button className="hamburger-menu" onClick={() => setShowModal(true)}>
          {" "}
          Filter <BiMenu className="hamburger-icon" />
        </button>
      </div>
      <div className="grid-parent">
        <div className="cardContainer">
          {housesArray
            .sort(sortMethods[sortState].method)
            .filter(filterMethods[propertyFilter].method)
            .map((item) => {
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
                  garden={item.garden}
                  metaverse={item.metaverse}
                  city={item.city}
                />
              );
            })}
        </div>
      </div>
      {showModal ? (
        <FilterMenuModal>
         
            {/* <DropDown
              array={propertyTypeOptions}
              onChange={(e) => setPropertyFilter(e.target.value)}
            /> */}
            
            {/* <DropDown
              array={bedroomOptions}
              onChange={(e) => setPropertyFilter(e.target.value)}
            /> */}
            <div class='signup-container'>
  <div class='left-container'>
    <h1>
  
      CLOUD HOMES
    </h1>
    <div class='puppy'>
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png'/>
    </div>
  </div>
  <div class='right-container'>
    <header>
      <h1>Search for your next adventure</h1>
      <div class='set'>
        <div class='pets-name'>
          <label for='pets-name'>Metaverse</label>
          <input id='pets-name' placeholder="Search Metaverses" type='text'/>
        </div>
        <div class='pets-name'>
          <label for='pets-name'>City</label>
          <input id='pets-name' placeholder="Search Cities" type='text'/>
        </div>
      </div>
      <div class='set'>
        <div class='pets-breed'>
        <label for='pets-breed'>Property type</label>
           <DropDown
              array={propertyTypeOptions}
              onChange={(e) => setPropertyFilter(e.target.value)}
            /> 
        </div>
        <div class='pets-birthday'>
          <label for='pets-birthday'>Number of bedrooms</label>
          <DropDown
              array={bedroomOptions}
              onChange={(e) => setPropertyFilter(e.target.value)}
            />
        </div>
      </div>
      <div class='set'>
        <div class='pets-gender'>
          <label for='pet-gender-female'>Garden</label>
          <div class='radio-container'>
            <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
            <label for='pet-gender-female'>Yes</label>
            <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
            <label for='pet-gender-male'>No</label>
          </div>
        </div>
        <div class='pets-spayed-neutered'>
          <label for='pet-spayed'>Spayed or Neutered</label>
          <div class='radio-container'>
            <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'/>
            <label for='pet-spayed'>Spayed</label>
            <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'/>
            <label for='pet-neutered'>Neutered</label>
          </div>
        </div>
        </div>
        <div class='set'>
        <div class='pets-name'>
          <label for='pets-name'>Property Name</label>
          <input id='pets-name' placeholder="Search for property name" type='text'/>
        </div>
        <div class='pets-name'>
          <label for='pets-name'>Key Word</label>
          <input id='pets-name' placeholder="key words or features" type='text'/>
        </div>
      </div>
      
      
    </header>
    <footer>
      <div class='set'>
      <button id="pop-up-button" onClick={() => setShowModal(false)}>
              Close
            </button>
        <button id='next'>Search</button>
      </div>
    </footer>
  </div>
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
