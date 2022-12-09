import { useEffect, useState } from "react";

export default function useFetchSearch(keyword, price, rent, buy) {
    const [searchArray, setsearchArray] = useState([]);

    useEffect(() => {
        const domain="http://localhost:3002";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?keyword=${keyword}`);
            const data = await response.json();
            setsearchArray(data.payload);
        }
        getData();
    }, [inputData]);

    return [ searchArray ];
}