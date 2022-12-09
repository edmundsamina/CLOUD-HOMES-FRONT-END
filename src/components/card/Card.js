import useFetch from "../../hooks/useFetch";
import { HouseFetchContext } from "../HouseFetchContext/HouseFetchContext";
import star from "../../assets/star.png";
import cardImg from "../../assets/cardimg.png";

export default function Card(homes) {
  //const housesArray = useFetch();

  const housesArray = [
    {
      name: "The White House",
      location: "Washington DC",
      price: "1000000",
      rent: false,
      buy: false,
      image: "https://media.architecturaldigest.com/photos/59a6c857134a14225b851902/3:4/w_2673,h_3564,c_limit/GettyImages-167852887.jpg",
      desc: "White it may be but black is its heart",
      id: 1
    },
    {
      name: "The London Dungeon",
      location: "Somewhere in London",
      price: "200000",
      rent: false,
      buy: true,
      image: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1644424296/post_images/london-2/The-London-Dungeon/LauraLippay-London-Dungeon.jpg",
      desc: "Home of London's political elite",
      id: 2
    },
    {
      name: "Windmill Upon Hills",
      location: "Genting Permai, Pahang",
      price: "14799",
      rent: false,
      buy: true,
      image: "https://apicms.thestar.com.my/uploads/images/2020/10/10/892960.jpg",
      desc: "OSK Property Malaysia",
      id: 3
    }
  ]

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
          {rent ? <><input type="checkbox" checked /><label>Rent</label></> : <><input type="checkbox" /><label>Rent</label></>}
          {buy ? <><input type="checkbox" checked /><label>Rent</label></> : <><input type="checkbox" /><label>Rent</label></>}
          </div>
      );
    })}
    </div>
  )
}
