import { useEffect, useState } from "react";


export default function useFetch() {
    const [housesArray, sethousesArray] = useState([]);

    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/api/properties`);
            const data = await response.json();
            sethousesArray(data.payload);
        }
        getData();
    }, []);

    return [ housesArray, sethousesArray ];
}