import './search.css'

export default function Search(props) {

    return(
        <div className="search-container">
        <input placeholder="search by metaverse"className="search-bar" type="text" onChange={props.onChange}></input>
        <button className="rent" onClick={props.onClickRent}>rent</button>
        <button className="buy"  onClick={props.onClickBuy}>buy</button>
        </div>
    )
}