import star from "../../assets/star.png";

export default function Card(props) {
 

  return (
    <div className="card-index">
    {/* {housesArray.map(({name, location, price, rent, buy, image, desc, id}) => {
      return( */}
        <div className="card-container">
          <img src={props.image} alt={props.name} />
          <div className="card-stats">
            <img className="card-star" src={star} alt="star" />
            <span className="grey">5.0</span>
            <span className="grey"> • </span>
            <span>VIRTUAL</span>
          </div>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>{props.location}</p>
          <p className="price">${props.price}</p>
          {props.rent ? <p className="rent">Rent</p> : <p className="buy">Buy</p>}
          
          </div>
      {/* ); */}
    {/* })} */}
    </div>
  )
}
