async function fetchSearch({ queryKey }) {
    const { metaverse, city, bedrooms, bathrooms, garden, propertyType } = queryKey[1];
    const res = await fetch(
      `https://cloudhomesbackend.onrender.com/api/properties?city=${city}&metaverse=${metaverse}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&garden=${garden}&propertyType=${propertyType}`
    );
  
    if (!res.ok)
      throw new Error(`fetch error`);
  
    return res.json();
  }
  
  export default fetchSearch;