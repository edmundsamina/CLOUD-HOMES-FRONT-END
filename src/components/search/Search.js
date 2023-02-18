import "./search.css";
import google from '../../assets/company-icons/google.png';
import meta from '../../assets/company-icons/meta.png';
import nft from '../../assets/company-icons/nft-worlds.png';
import roblox from '../../assets/company-icons/roblox.png';
import apple from '../../assets/company-icons/apple.png';
import amazon from '../../assets/company-icons/amazon.png';
import logo from "../../assets/icons8-home-app-200.png";
import propertyIcons from "../../assets/property-icons/propertyIcons.js"

export default function Search(props) {
  function reloadPage () {

    window.location.reload()
  }

  return (
    <div className="search-parent">
      <img onClick={() => reloadPage()} src={logo} alt="house in the clouds" className="nav-logo" id="nav-logo"/>
      <div className="search-container">
      
<div className="drop-downs-container">
          <div className= "meta-dropdown">
            <button onClick={props.dropDown} className="dropbtn">
             {props.metaverseName}
            </button>
            {props.show && (
              <div id="myDropdown" className="dropdown-content">
                <div>
                <img
                  onClick={props.metaSelect}
                  id="apple"
                  src={apple}
                  alt="apple"
                /><p>Apple</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="meta"
                  src={meta}
                  alt="meta"
                /><p>Meta</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="google"
                  src={google}
                  alt="google"
                /><p>Google</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="nftworlds"
                  src={nft}
                  alt="nftworlds"
                /><p>NFTworlds</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="amazon"
                  src={amazon}
                  alt="amazon"
                /><p>Amazon</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="roblox"
                  src={roblox}
                  alt="roblox"
                /><p>Roblox</p></div>
              </div>
            )}
          </div>
    
          <div className= "property-dropdown">
            <button onClick={props.propertyDropDown} className="dropbtn">
              {props.propertyType}
            </button>
            {props.propertyTypeShow && (
              <div id="myDropdown" className="dropdown-content">
                <div><img
                  onClick={props.propertyTypeSelect}
                  id="house"
                  src={propertyIcons.house}
                  alt="house"
                /><p>House</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="flat"
                  src={propertyIcons.flat}
                  alt="flat"
                /><p>Flat</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="themed"
                  src={propertyIcons.themed}
                  alt="themed"
                /><p>Themed</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="studio"
                  src={propertyIcons.studio}
                  alt="studio"
                /><p>Studio</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="cottage"
                  src={propertyIcons.cottage}
                  alt="cottage"
                /><p>Cottage</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="hotel"
                  src={propertyIcons.hotel}
                  alt="hotel"
                /><p>Hotel</p></div>
              </div>
            )}
          </div>

          <div className= "bedrooms-dropdown">
            <button onClick={props.bedroomsDropDown} className="dropbtn">
              {props.bedrooms}
            </button>
            {props.bedroomsShow && (
              <div id="myDropdown" className="bedrooms-dropdown-content">
                
                <button className="bedrooms-number"
                  onClick={props.bedroomsSelect}
                  value="1"
                >1</button>
                  <button className="bedrooms-number"
                  onClick={props.bedroomsSelect}
                  value="2"
                >2</button>
                  <button className="bedrooms-number"
                  onClick={props.bedroomsSelect}
                  value="3"
                >3</button>  
                <button className="bedrooms-number"
                onClick={props.bedroomsSelect}
                value="4"
              >4</button>
                <button className="bedrooms-number"
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
            <button onClick={props.bathroomsDropDown} className="dropbtn dropbtn-bathroom">
              {props.bathrooms}
            </button>
            {props.bathroomsShow && (
              <div id="myDropdown" className="bathrooms-dropdown-content">
                
                <button className="bathrooms-number"
                  onClick={props.bathroomsSelect}
                  value="1"
                >1</button>
                  <button className="bathrooms-number"
                  onClick={props.bathroomsSelect}
                  value="2"
                >2</button>
                  <button className="bathrooms-number"
                  onClick={props.bathroomsSelect}
                  value="3"
                >3</button>  
                <button className="bathrooms-number"
                onClick={props.bathroomsSelect}
                value="4"
              >4</button>
                <button className="bathrooms-number"
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
        
        </div>
        <div className="buttons-container">
        <button id="rent" onClick={props.onClickRent}>
          rent
        </button>
        <button id="buy" onClick={props.onClickBuy}>
          buy
        </button>
        </div>
       
      </div>
    </div>
  );
}
