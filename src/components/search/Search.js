import useFetch from "../../hooks/useFetch";
import useFetchSearch from "../../hooks/useFetchSearch";
import {useState} from "react";

export default function Search({keyword, price, rent, buy}) {
    const [inputData, setinputData] = useState("");

    const results = useFetchSearch(inputData);
    return(
        <input type="text" onChange={(e) => {setinputData(e.target.value)}}></input>
    )
}