import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function useFetchSearch(onClickData, rentBoolean) {
    //updating the state in the onload hook to avoid sending double requests
    const [housesArray, setHousesArray] = useFetch();
    console.log(onClickData)
    
    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com"
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?metaverse=${onClickData.metaverse}&rent=${rentBoolean}&type=${onClickData.type}&bedrooms=${onClickData.bedrooms}&bathrooms=${onClickData.bathrooms}`);
           
            const data = await response.json();
            
            setHousesArray(data.payload)
        }
        getData();
    }, [onClickData,  rentBoolean,
        setHousesArray]);
        //exporting this updated data 
    return [ housesArray ];
}