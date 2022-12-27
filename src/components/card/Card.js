import "./card.css";
import bedrooms from "../../assets/icons8-bed-96.png";
import bathrooms from "../../assets/icons8-shower-96.png";
import garden from "../../assets/icons8-tree-planting-96.png";
import logo from "../../assets/icons8-google-96.png";
import Modal from "../Modal/Modal.js";
import { useState } from "react";

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-index">
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img
              onClick={() => setShowModal(true)}
              className="img"
              src={props.image}
              alt={props.name}
            />{" "}
          </div>
          <div className="text-container">
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
                <img
                  className="icon"
                  src={garden}
                  alt="planting icon"
                /> YES{" "}
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
      {showModal ? (
        <Modal>
          <div id="pop-up-card">
            <nav id="pop-up-navigation">
              <img id="arrow" />
              <img id="heart" />
            </nav>
            <div >
              <img id="pop-up-image" src={props.image}></img>
            </div>
            <div id="pop-up-description">
              <h2>{props.name}</h2>
              <h4>{props.metaverse} metaverse</h4>
              <h1>£{props.price}</h1>
              <p>
               {props.description}
              </p>
              <button id="pop-up-button">Book a virtual tour</button>
              <button id="pop-up-button" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        
        </Modal>
      ) : null}
    </div>
  );
}

