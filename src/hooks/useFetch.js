//import { HouseFetchContext } from "../components/HouseFetchContext/HouseFetchContext";
import { useEffect, useState } from "react";
import { HouseFetchContext } from "../components/HouseFetchContext/HouseFetchContext";

export default async function useFetch() {
    const [housesArray, sethousesArray] = useState([]);

    useEffect(() => {
        const domain=process.env.POSTGRES;
        async function getData() {
        const response = await fetch(`${domain}/homes`);
            const data = await response.json();
            sethousesArray(data.payload);
        }
        getData();
    }, []);

    return housesArray;
}