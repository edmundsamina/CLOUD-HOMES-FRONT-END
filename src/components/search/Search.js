import './search.css'

export default function Search(props) {

    return(
        <div className='search-parent'>
         <h3>Find your perfect Meta-Home</h3>
        <div className="search-container">
        <input placeholder="search by metaverse"className="search-bar" type="text" onChange={props.onChangeMeta}></input>
        <input placeholder="property-type"className="search-propertyType" type="text" onChange={props.onChangeType}></input>
        <input placeholder="bedrooms"className="search-bedrooms" type="text" onChange={props.onChangeBed}></input>
        <input placeholder="bathrooms"className="search-bathrooms" type="text" onChange={props.onChangeBath}></input>
        <button id="rent" onClick={props.onClickRent}>rent</button>
        <button id="buy"  onClick={props.onClickBuy}>buy</button>
        </div>
        </div>
       
    )
}