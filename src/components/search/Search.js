import './search.css'

export default function Search(props) {

    return(
        <div className="search-container">
        <input placeholder="search by metaverse"className="search-bar" type="text" onChange={props.onChange}></input>
        <button className="rent" onClick={props.onClick}>rent</button>
        <button className="buy"  onClick={props.onClick}>buy</button>
        </div>
    )
}