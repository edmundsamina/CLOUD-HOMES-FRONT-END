import './card.css';
import bedrooms from '../../assets/icons8-bed-96.png'
import bathrooms from '../../assets/icons8-shower-96.png'
import garden from '../../assets/icons8-tree-planting-96.png'
import logo from '../../assets/icons8-google-96.png'

export default function Card(props) {
 

  return (
    <div className="card-index">
    {/* {housesArray.map(({name, location, price, rent, buy, image, desc, id}) => {
      return( */}
        <div className="card-container">

        <div class = "card">
          <div className='image-container'><img class="img"src = {props.image} alt={props.name} /> </div>
          <h3>{props.name.toUpperCase()}</h3>
          <div class="price-days-container"><span class="price">${props.price}</span>{props.rent ? <p className="rent">Rent</p> : <p className="buy">Buy</p>}</div>
          <div class="bedrooms-bathrooms"><span class="bedrooms"><img class= "icon"src={bedrooms}alt="bedroom icon"/>{props.bedrooms}</span>{props.garden ? <span class="garden"> <img class= "icon"src={garden}alt="planting icon"/> YES </span>: <span class="garden"><img class= "icon"src={garden}alt="planting icon"/>NO </span>}<span class="bathrooms"><img class= "icon"src={bathrooms} alt="bathroom icon"/>{props.bathrooms}</span></div>
           <footer><img class="profile-icon" src={logo} alt="creator"/><span class="creator-subtitle">{props.metaverse} - </span>{props.city}</footer>
       </div>
          
        </div>
      {/* ); */}
    {/* })} */}
    </div>
  )
}

//image 
//name 
// price // rent or buy
//

// <img src={props.image} alt={props.name} />
// <h3>{props.name}</h3>
// <p>{props.desc}</p>
// <p>{props.location}</p>
// <p className="price">${props.price}</p>
// {props.rent ? <p className="rent">Rent</p> : <p className="buy">Buy</p>}