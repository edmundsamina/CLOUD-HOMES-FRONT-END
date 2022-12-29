import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function useFetchSearch(onClickData, rentBoolean) {
    //updating the state in the onload hook to avoid sending double requests
    const [housesArray, setHousesArray] = useFetch();
    console.log(onClickData)
    
    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?metaverse=${onClickData.metaverse}&rent=${rentBoolean}&type=${onClickData.type}&bedrooms=${onClickData.bedrooms}&bedrooms=${onClickData.bathrooms}`);
            console.log(response)
            const data = await response.json();
            console.log(data)
            setHousesArray(data.payload)
        }
        getData();
    }, [onClickData,  rentBoolean,
        setHousesArray]);
        //exporting this updated data 
    return [ housesArray ];
}