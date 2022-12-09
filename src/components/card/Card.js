import useFetch from "../../hooks/useFetch";
import { HouseFetchContext } from "../HouseFetchContext/HouseFetchContext";
import star from "../../assets/star.png";
import cardImg from "../../assets/cardimg.png";

export default function Card({housesArray}) {
 

  return (
    <div className="card-index">
    {housesArray.map(({name, location, price, rent, buy, image, desc, id}) => {
      return(
        <div className="card-container">
          <img src={image} alt={name} />
          <div className="card-stats">
            <img className="card-star" src={star} alt="star" />
            <span className="grey">5.0</span>
            <span className="grey"> • </span>
            <span>VIRTUAL</span>
          </div>
          <h3>{name}</h3>
          <p>{desc}</p>
          <p>{location}</p>
          <p className="price">${price}</p>
          {rent ? <p className="rent">Rent</p> : <p className="buy">Buy</p>}
          
          </div>
      );
    })}
    </div>
  )
}
