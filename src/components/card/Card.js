import "./card.css";
import bedrooms from "../../assets/icons8-bed-96.png";
import bathrooms from "../../assets/icons8-shower-96.png";
import garden from "../../assets/icons8-tree-planting-96.png";
import logo from "../../assets/icons8-google-96.png";
import Modal from "../Modal/Modal.js"
import { useState } from "react"

export default function Card(props) {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-index" >
      {/* {housesArray.map(({name, location, price, rent, buy, image, desc, id}) => {
      return( */}
      <div className="card-container">
        <div className="card" >
        {showModal ? (
          <Modal>
            <div className ="pop-up-container">
              <h1>{props.name}</h1>
              
                
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            
          </Modal>
        ) : null}
          <div className="image-container">
            <img onClick={() => setShowModal(true)} className="img" src={props.image} alt={props.name} />{" "}
          </div>
          <h3>{props.name.toUpperCase()}</h3>
          <div className="price-days-container">
            <span className="price">${props.price}</span>
            {props.rent ? (
              <p className="rent">Rent</p>
            ) : (
              <p className="buy">Buy</p>
            )}
          </div>
          <div className="bedrooms-bathrooms">
            <span className="bedrooms">
              <img className="icon" src={bedrooms} alt="bedroom icon" />
              {props.bedrooms}
            </span>
            {props.garden ? (
              <span className="garden">
                {" "}
                <img className="icon" src={garden} alt="planting icon" /> YES{" "}
              </span>
            ) : (
              <span className="garden">
                <img className="icon" src={garden} alt="planting icon" />
                NO{" "}
              </span>
            )}
            <span className="bathrooms">
              <img className="icon" src={bathrooms} alt="bathroom icon" />
              {props.bathrooms}
            </span>
          
          
        
        
          <footer>
            <img className="profile-icon" src={logo} alt="creator" />
            <span className="creator-subtitle">{props.metaverse} - </span>
            {props.city}
          </footer>
          
      </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </div>
  );
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
