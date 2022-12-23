import { useEffect, useState } from "react";

export default function useFetchSearch(searchData, searchKey, rentBoolean) {
    const [searchArray, setsearchArray] = useState([]);

    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?${searchKey}=${searchData}&rent=${rentBoolean}`);
            const data = await response.json();
            setsearchArray(data.payload);
        }
        getData();
    }, [searchData, searchKey, rentBoolean]);

    return [ searchArray ];
}