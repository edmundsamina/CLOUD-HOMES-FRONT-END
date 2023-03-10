import "./card.css";
import bedrooms from "../../assets/icons8-bed-96.png";
import bathrooms from "../../assets/icons8-shower-96.png";
import garden from "../../assets/icons8-tree-planting-96.png";
import Modal from "../Modal/Modal.js";
import { useState } from "react";
import { FaHeart, FaBed, FaBath, FaLongArrowAltLeft } from 'react-icons/fa';
import { TbPlant } from 'react-icons/tb'
import companyIcons from '../../assets/companyIcons.js'

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
            <div className="meta-company"><img className="company-logo"src={companyIcons[props.metaverse]} alt={props.metaverse}/><h5>{props.metaverse}</h5></div>
          </div>
          <div className="text-container">
          <h3>{props.name.toUpperCase()}</h3>
          
          
            {props.rent ? (
              <div   className="price-days-container">
              <span className="priceRent">${props.price}</span>
              <p className="rent">Rent</p>
              </div>
            ) : (
              <div   className="price-days-container-buy">
            <span className="priceBuy">${props.price}</span>
              <p className="buy">Buy</p>
              </div>
            )}
         
          <div className="bedrooms-bathrooms">
            <span className="bedrooms">
              <img className="icon" src={bedrooms} alt="bedroom icon" />
              {props.bedrooms}
            </span>
            {props.garden ? (
              <span className="garden">
                <img
                  className="icon"
                  src={garden}
                  alt="planting icon"
                /> YES
              </span>
            ) : (
              <span className="garden">
                <img className="icon" src={garden} alt="planting icon" />
                NO
              </span>
            )}
            <span className="bathrooms">
              <img className="icon" src={bathrooms} alt="bathroom icon" />
              {props.bathrooms}
            </span>

            {/* <footer>
              <img className="profile-icon" src={logo} alt="creator" />
              <span className="creator-subtitle">{props.metaverse} - </span>
              {props.city}
            </footer> */}
          </div>
        </div>
      </div>

      {showModal ? (
        <Modal>
          <div id="pop-up-card">
            <div id="pop-up-navigation">
              <div className="back-pop" onClick={() => setShowModal(false)}><FaLongArrowAltLeft id="arrow" />back to results <FaHeart id="heart" /></div>
              
            </div>
            <div >
              <img id="pop-up-image" src={props.image} alt="property" ></img>
            </div>
            <div id="pop-up-description">
              <h2 id="pop-up-description-h2">{props.name}</h2>
              <h4 id="pop-up-description-h4">{props.metaverse} metaverse</h4>
              <div className="stats">
              <div><h1 id="pop-up-description-h1">??{props.price}</h1></div>
              <div className="bedbath"><div><p> <FaBed/> {props.bedrooms} bedrooms</p></div><div><p><FaBath/> {props.bathrooms} bathrooms</p></div>{props.garden ? (<div><p><TbPlant/>Garden</p></div>) : (<div><p>No garden</p></div>)}</div>
              </div>
              <p id="pop-up-description-p">
               {props.desc}
              </p>
              <button id="pop-up-button">Book a tour</button>
              <button id="pop-up-button" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
    </div>
  );
}

