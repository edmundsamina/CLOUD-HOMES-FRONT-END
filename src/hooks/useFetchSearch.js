import { useEffect, useState } from "react";

export default function useFetchSearch(searchData, searchKey) {
    const [searchArray, setsearchArray] = useState([]);

    useEffect(() => {
        const domain="https://cloudhomesbackend.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/api/properties/?${searchKey}=${searchData}`);
            const data = await response.json();
            setsearchArray(data.payload);
        }
        getData();
    }, [searchData, searchKey]);

    return [ searchArray ];
}