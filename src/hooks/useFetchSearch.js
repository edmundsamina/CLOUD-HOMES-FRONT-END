import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function useFetchSearch(onClickData, searchKey, rentBoolean) {
    //updating the state in the onload hook to avoid sending double requests
    const [housesArray, setHousesArray] = useFetch();
    
    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?${searchKey}=${onClickData}&rent=${rentBoolean}`);

            const data = await response.json();
            setHousesArray(data.payload)
        }
        getData();
    }, [onClickData, searchKey, rentBoolean,
        setHousesArray]);
        //exporting this updated data 
    return [ housesArray ];
}