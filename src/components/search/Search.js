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
    

        <input
          placeholder="property-type"
          className="search-propertyType"
          type="text"
          onChange={props.onChangeType}
        ></input>
        <input
          placeholder="bedrooms"
          className="search-bedrooms"
          type="text"
          onChange={props.onChangeBed}
        ></input>
        <input
          placeholder="bathrooms"
          className="search-bathrooms"
          type="text"
          onChange={props.onChangeBath}
        ></input>
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
