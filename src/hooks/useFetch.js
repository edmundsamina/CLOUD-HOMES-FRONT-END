//import { HouseFetchContext } from "../components/HouseFetchContext/HouseFetchContext";
import { useEffect, useState } from "react";
//import { HouseFetchContext } from "../components/HouseFetchContext/HouseFetchContext";

export default function useFetch() {
    const [housesArray, sethousesArray] = useState([]);

    useEffect(() => {
        const domain="http://localhost:3002";
        async function getData() {
        const response = await fetch(`${domain}/api/properties`);
            const data = await response.json();
            sethousesArray(data.payload);
        }
        getData();
    }, []);

    return [ housesArray, sethousesArray ];
}