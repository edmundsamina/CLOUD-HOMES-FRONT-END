import "./App.css";
import { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import Card from "./components/card/Card";
import Search from "./components/search/Search.js";
import useFetchSearch from "./hooks/useFetchSearch";
import DropDown from "./components/DropDown/DropDown";
import { v4 as uuidv4 } from "uuid";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import FilterMenuModal from "./components/Modal/FilterMenuModal";
import logo from "./assets/icons8-home-app-200.png";
import queryFetchSearch from "./hooks/queryFetchSearch";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

//config for query - infinity means it won't update while the user has the page open, can put time in ms here and it will check for new stuff
const Client = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: Infinity,
  //     cacheTime: Infinity,
  //   },
  // },
});


function App() {
  //input captures the state of the input as the user types
const [inputData, setinputData] = useState({metaverse: "",
type: "",
bedrooms: 0,
bathrooms: 0});
  //second state to only pass through the input state once the user clicks send, otherwise the useFetch is triggered everytime they type
  const [onClickData, setOnClickData] = useState();
  //second paramter of the fetch request, if false then fetches homes for sale
  const [rentBoolean, setRentBoolean] = useState();
  //extracting the original fetch data and updating it to avoid the double click
  const [housesArray] = useFetchSearch(onClickData, rentBoolean);
  const [sortState, setSortState] = useState("none");
  const [propertyFilter, setPropertyFilter] = useState("none");

  //for hamburger pop up
  const [showModal, setShowModal] = useState(false);

  console.log(inputData)
  const [requestParams, setRequestParams] = useState({
    metaverse: "",
    city: "",
    bathrooms: "",
    bedrooms: "",
    garden: "",
    propertyType: "",
  });
  //first argument is a unique id for keeping track of fetching - descriptive word is convention
  // const results = useQuery(["search", requestParams], queryFetchSearch);
  // const properties = results?.data?.properties ?? [];
  
  // console.log("request params obj is the next log");
  // console.log(properties);

  console.log(housesArray);
  const propertyTypeOptions = ["Any,", "House", "Flat", "Cottage", "Themed"];
  const bathroomOptions = ["none", "1", "2", "3", "4", "5+"];
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

  //dropdown functions 
const [show, setShow] = useState(false);
const [bedroomsShow, setBedroomsShow] = useState(false);
const [propertyTypeShow, setPropertyTypeShow] = useState(false);
const [metaverseName, setMetaverseName] = useState('Select Metaverse');
const [propertyType, setPropertyType] = useState('Select Property Type');
const [bedrooms, setBedrooms] = useState('Number of Bedrooms');

function dropDown() {
    setShow(!show);
    setPropertyTypeShow(false);
    setBedroomsShow(false);
  }
  function propertyDropDown() {
    setPropertyTypeShow(!propertyTypeShow);
    setShow(false);
    setBedroomsShow(false);
  }
  function bedroomsDropDown() {
    setBedroomsShow(!propertyTypeShow);
    setShow(false);
    setPropertyTypeShow(false);
  }

  return (
    <div className="App">
      <QueryClientProvider client={Client}>
        <Navbar />
        <div className="landing-page">
          <Search
          metaverseName={metaverseName}
          show={show}
          propertyType={propertyType}
          propertyTypeShow={propertyTypeShow}
          bedrooms={bedrooms}
          bedroomsShow={bedroomsShow}
          dropDown={dropDown}
          propertyDropDown={propertyDropDown}
          bedroomsDropDown={bedroomsDropDown}
            onClickBuy={clickHandlerBuy}
            onClickRent={clickHandlerRent}
            metaSelect={(e) => {
              setinputData({...inputData, metaverse:e.target.alt});
              setShow(!show);
              setMetaverseName(e.target.alt);
            }}
            propertyTypeSelect={(e) => {
              setinputData({...inputData, type:e.target.alt});
              setPropertyTypeShow(!propertyTypeShow);
              setPropertyType(e.target.alt);
              
            }}
            bedroomsSelect={(e) => {
              setinputData({...inputData, bedrooms: Number(e.target.value)});
             
              setBedroomsShow(!bedroomsShow);
              setBedrooms(e.target.value);
            }}
            // onChangeType={(e) => {
            //   setinputData({...inputData, type:e.target.value});
            // }}
            // onChangeBed={(e) => {
            //   setinputData({...inputData, bedrooms:e.target.value});
            // }}
            onChangeBath={(e) => {
              setinputData({...inputData, bathrooms:e.target.value});
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
            <div className="filter-pop-up-container">
              <div className="left-container">
                <h1>CLOUD HOMES</h1>
                <div className="pop-up-logo">
                  <img src={logo} alt="cloud in the sky"/>
                </div>
              </div>
              <div className="right-container">
                <button
                  id="close"
                  className="close-button"
                  onClick={() => setShowModal(false)}
                >
                  Close <IoMdClose />
                </button>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                      metaverse: formData.get("metaverse") ?? "",
                      city: formData.get("city") ?? "",
                      bathrooms: formData.get("bathrooms") ?? "",
                      bedrooms: formData.get("bedrooms") ?? "",
                      garden: formData.get("garden") ?? "",
                      propertyType: formData.get("propertyType") ?? "",
                      rent: formData.get("rent") ?? "",
                      buy: formData.get("buy") ?? "",
                    };

                    setRequestParams(obj);
                  }}
                >
                  <header>
                    <h1>The future starts here</h1>
                    <div className="set">
                      <div className="metaverse-filter">
                        <label htmlFor="metaverse-filter">Metaverse</label>
                        <input
                          name="metaverse"
                          id="metaverse-filter"
                          placeholder="Search Metaverses"
                          type="text"
                        />
                      </div>
                      <div className="city-filter">
                        <label htmlFor="city">City</label>
                        <input
                          id="city-filter"
                          name="city"
                          placeholder="Search Cities"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="set">
                      <div className="property-type-filter">
                        <label
                          name="propertyType"
                          htmlFor="property-type-filter"
                        >
                          Property type
                        </label>
                        <DropDown
                          name="propertyType"
                          array={propertyTypeOptions}
                          value={propertyTypeOptions}
                          key={propertyTypeOptions}
                          // onChange={(e) => setPropertyFilter(e.target.value)}
                        />
                      </div>
                      <div className="bedrooms-filter">
                        <label for="bedrooms-filter" name="bedrooms">
                          Number of bedrooms
                        </label>
                        <DropDown
                          name="bedrooms"
                          array={bedroomOptions}
                          value={bedroomOptions}
                          key={bedroomOptions}
                          // onChange={(e) => setPropertyFilter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="set">
                      <div className="garden-filter">
                        <label htmlFor="garden-filter" name="garden">
                          Garden
                        </label>
                        <div className="radio-container">
                          <input
                            checked=""
                            id="garden-filter-true"
                            name="garden-filter"
                            type="radio"
                            value="true"
                          />
                          <label htmlFor="garden-filter-true">Yes</label>
                          <input
                            id="garden-filter"
                            name="garden-filter"
                            type="radio"
                            value="false"
                          />
                          <label htmlFor="garden-filter-false">No</label>
                        </div>
                      </div>
                      <div className="bathrooms-filter">
                        <label htmlFor="bathrooms-filter" name="bathrooms">
                          Number of bathrooms
                        </label>
                        <DropDown
                          name="bathrooms"
                          array={bathroomOptions}
                          // onChange={(e) => setPropertyFilter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="set">
                      <div className="name-filter">
                        <label htmlFor="name-filter">Property Name</label>
                        <input
                          id="name-filter"
                          placeholder="Search for property name"
                          type="text"
                        />
                      </div>
                      <div className="keyword-filter">
                        <label htmlFor="keyword-filter">Key Word</label>
                        <input
                          id="keyword-filter"
                          placeholder="key words or features"
                          type="text"
                        />
                      </div>
                    </div>
                  </header>
                  <footer>
                    <div className="set">
                      <button id="next">Submit</button>
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </FilterMenuModal>
        ) : null}
      </QueryClientProvider>
    </div>
  );
}

export default App;
