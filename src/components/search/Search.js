// import useFetch from "../../hooks/useFetch";
// import useFetchSearch from "../../hooks/useFetchSearch";
// import {useState} from "react";

export default function Search(props) {

    return(
        <div>
        <input type="text" onChange={props.onChange}></input>
        <button onClick={props.onClick}>submit</button>
        </div>
    )
}