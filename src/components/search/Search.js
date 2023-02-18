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
                /><p>apple</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="meta"
                  src={meta}
                  alt="meta"
                /><p>meta</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="google"
                  src={google}
                  alt="google"
                /><p>google</p></div><div>
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
                /><p>amazon</p></div><div>
                <img
                  onClick={props.metaSelect}
                  id="roblox"
                  src={roblox}
                  alt="roblox"
                /><p>roblox</p></div>
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
                  src="https://img.icons8.com/arcade/256/home.png"
                  alt="house"
                /><p>house</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="flat"
                  src="https://img.icons8.com/arcade/256/apartment.png"
                  alt="flat"
                /><p>flat</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="themed"
                  src="https://img.icons8.com/arcade/256/castle.png"
                  alt="themed"
                /><p>themed</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="studio"
                  src="https://img.icons8.com/arcade/256/room.png"
                  alt="studio"
                /><p>studio</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="cottage"
                  src="https://img.icons8.com/arcade/256/gingerbread-house.png"
                  alt="cottage"
                /><p>cottage</p></div><div>
                <img
                  onClick={props.propertyTypeSelect}
                  id="hotel"
                  src="https://img.icons8.com/arcade/256/city-buildings.png"
                  alt="hotel"
                /><p>hotel</p></div>
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
