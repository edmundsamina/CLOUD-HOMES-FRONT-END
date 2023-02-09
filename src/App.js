import "./App.css";
import { useState } from "react";
import Navbar from "./components/navBar/Navbar";
import Card from "./components/card/Card";
import NoPropertiesFound from "./components/noPropertiesFound/NoPropertiesFound";
import Search from "./components/search/Search.js";
import useFetchSearch from "./hooks/useFetchSearch";
import { v4 as uuidv4 } from "uuid";
import {  QueryClient, QueryClientProvider } from "react-query";

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


  
  //first argument is a unique id for keeping track of fetching - descriptive word is convention
  // const results = useQuery(["search", requestParams], queryFetchSearch);
  // const properties = results?.data?.properties ?? [];
  
  // console.log("request params obj is the next log");
  // console.log(properties);

 

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

  

  //dropdown functions 
const [show, setShow] = useState(false);
const [bedroomsShow, setBedroomsShow] = useState(false);
const [bathroomsShow, setBathroomsShow] = useState(false);

const [propertyTypeShow, setPropertyTypeShow] = useState(false);
const [metaverseName, setMetaverseName] = useState('Select Metaverse');
const [propertyType, setPropertyType] = useState('Select Property Type');
const [bedrooms, setBedrooms] = useState('Bedrooms');
const [bathrooms, setBathrooms] = useState('Bathrooms');


function dropDown() {
    setShow(!show);
    setPropertyTypeShow(false);
    setBedroomsShow(false);
    setBathroomsShow(false)

  }
  function propertyDropDown() {
    setPropertyTypeShow(!propertyTypeShow);
    setShow(false);
    setBedroomsShow(false);
    setBathroomsShow(false)

  }
  function bedroomsDropDown() {
    setBedroomsShow(true);
    setShow(false);
    setPropertyTypeShow(false);
    setBathroomsShow(false)

  }
  function bathroomsDropDown() {
    setBathroomsShow(!bathroomsShow)
    setBedroomsShow(false);
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
          bathroomsShow={bathroomsShow}
          bedrooms={bedrooms}
          bedroomsShow={bedroomsShow}
          bathrooms={bathrooms}
          dropDown={dropDown}
          propertyDropDown={propertyDropDown}
          bedroomsDropDown={bedroomsDropDown}
          bathroomsDropDown={bathroomsDropDown}
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
        
            bathroomsSelect={(e) => {
              setinputData({...inputData, bathrooms: Number(e.target.value)});
              setBathroomsShow(!bathroomsShow)
              setBathrooms(e.target.value)
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
        </div>
        <div className="grid-parent">
          {housesArray.length < 1 ? (<NoPropertiesFound/>) : (
          <div className="cardContainer">
            {housesArray.sort(sortMethods[sortState].method).map((item) => {
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
          </div>)}
        </div>
        {/* {showModal ? (
          <FilterMenuModal>
  
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
        ) : null} */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
