import { useEffect, useState } from "react";

export default function useFetchSearch(searchData) {
    const [searchArray, setsearchArray] = useState([]);

    useEffect(() => {
        const domain="http://localhost:3002";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?description=${searchData}`);
            const data = await response.json();
            setsearchArray(data.payload);
        }
        getData();
    }, [searchData]);

    return [ searchArray ];
}