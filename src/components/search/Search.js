import useFetch from "../../hooks/useFetch";
import useFetchSearch from "../../hooks/useFetchSearch";
import {useState} from "react";

export default function Search() {
    const [inputData, setinputData] = useState("");
    const [searchData, setSearchData] = useState()
    const [ results ] = useFetchSearch(searchData);

function clickHandler(e){
    e.preventDefault()
setSearchData(inputData)
console.log(results)
}

    return(
        <div>
        <input type="text" onChange={(e) => {setinputData(e.target.value)}}></input>
        <button onClick={clickHandler}>submit</button>
        {results ? <p>Here are results: {results[0].name}</p> : <p>no results</p>}
        </div>
    )
}