import "./search.css";
import google from '../../assets/company-icons/google.png';
import meta from '../../assets/company-icons/meta.png';
import nft from '../../assets/company-icons/nft-worlds.png';
import roblox from '../../assets/company-icons/roblox.png';
import apple from '../../assets/company-icons/apple.png';
import amazon from '../../assets/company-icons/amazon.png';


export default function Search(props) {


  return (
    <div className="search-parent">
      <h3>Find your perfect Meta-Home</h3>
      <div className="search-container">
        {/* <input
          placeholder="search by metaverse"
          className="search-bar"
          type="text"
          onChange={props.onChangeMeta}
        ></input> */}

          <div className= "meta-dropdown">
            <button onClick={props.dropDown} className="dropbtn">
              {props.metaverseName}
            </button>
            {props.show && (
              <div id="myDropdown" className="dropdown-content">
                <img
                  onClick={props.metaSelect}
                  id="apple"
                  src={apple}
                  alt="apple"
                />
                <img
                  onClick={props.metaSelect}
                  id="meta"
                  src={meta}
                  alt="meta"
                />
                <img
                  onClick={props.metaSelect}
                  id="google"
                  src={google}
                  alt="google"
                />
                <img
                  onClick={props.metaSelect}
                  id="nftworlds"
                  src={nft}
                  alt="nftworlds"
                />
                <img
                  onClick={props.metaSelect}
                  id="amazon"
                  src={amazon}
                  alt="amazon"
                />
                <img
                  onClick={props.metaSelect}
                  id="roblox"
                  src={roblox}
                  alt="roblox"
                />
              </div>
            )}
          </div>
    
          <div className= "property-dropdown">
            <button onClick={props.propertyDropDown} className="dropbtn">
              {props.propertyType}
            </button>
            {props.propertyTypeShow && (
              <div id="myDropdown" className="dropdown-content">
                <img
                  onClick={props.propertyTypeSelect}
                  id="house"
                  src="https://img.icons8.com/arcade/256/home.png"
                  alt="house"
                />
                <img
                  onClick={props.propertyTypeSelect}
                  id="flat"
                  src="https://img.icons8.com/arcade/256/apartment.png"
                  alt="flat"
                />
                <img
                  onClick={props.propertyTypeSelect}
                  id="themed"
                  src="https://img.icons8.com/arcade/256/castle.png"
                  alt="themed"
                />
                <img
                  onClick={props.propertyTypeSelect}
                  id="studio"
                  src="https://img.icons8.com/arcade/256/room.png"
                  alt="studio"
                />
                <img
                  onClick={props.propertyTypeSelect}
                  id="cottage"
                  src="https://img.icons8.com/arcade/256/gingerbread-house.png"
                  alt="cottage"
                />
                <img
                  onClick={props.propertyTypeSelect}
                  id="hotel"
                  src="https://img.icons8.com/arcade/256/city-buildings.png"
                  alt="hotel"
                />
              </div>
            )}
          </div>

          <div className= "bedrooms-dropdown">
            <button onClick={props.bedroomsDropDown} className="dropbtn">
              {props.bedrooms}
            </button>
            {props.bedroomsShow && (
              <div id="myDropdown" className="bedrooms-dropdown-content">
                
                <button
                  onClick={props.bedroomsSelect}
                  value="1"
                >1</button>
                  <button
                  onClick={props.bedroomsSelect}
                  value="2"
                >2</button>
                  <button
                  onClick={props.bedroomsSelect}
                  value="3"
                >3</button>  
                <button
                onClick={props.bedroomsSelect}
                value="4"
              >4</button>
                <button
                  onClick={props.bedroomsSelect}
                  value="5"
                >5+</button>
              </div>
              
            )}
          </div>



        {/* <input
          placeholder="property-type"
          className="search-propertyType"
          type="text"
          onChange={props.onChangeType}
        ></input> */}
        {/* <input
          placeholder="bedrooms"
          className="search-bedrooms"
          type="text"
          onChange={props.onChangeBed}
        ></input> */}


        <div className= "bathrooms-dropdown">
            <button onClick={props.bathroomsDropDown} className="dropbtn">
              {props.bathrooms}
            </button>
            {props.bathroomsShow && (
              <div id="myDropdown" className="bathrooms-dropdown-content">
                
                <button
                  onClick={props.bathroomsSelect}
                  value="1"
                >1</button>
                  <button
                  onClick={props.bathroomsSelect}
                  value="2"
                >2</button>
                  <button
                  onClick={props.bathroomsSelect}
                  value="3"
                >3</button>  
                <button
                onClick={props.bathroomsSelect}
                value="4"
              >4</button>
                <button
                  onClick={props.bathroomsSelect}
                  value="5"
                >5+</button>
              </div>
              
            )}
          </div>

        {/* <input
          placeholder="bathrooms"
          className="search-bathrooms"
          type="text"
          onChange={props.onChangeBath}
        ></input> */}
        <button id="rent" onClick={props.onClickRent}>
          rent
        </button>
        <button id="buy" onClick={props.onClickBuy}>
          buy
        </button>
      </div>
    </div>
  );
}
