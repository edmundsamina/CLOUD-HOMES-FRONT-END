import "./card.css";
import bedrooms from "../../assets/icons8-bed-96.png";
import bathrooms from "../../assets/icons8-shower-96.png";
import garden from "../../assets/icons8-tree-planting-96.png";
import logo from "../../assets/icons8-google-96.png";

export default function Card(props) {
  return (
    <div className="card-index">
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img className="img" src={props.image} alt={props.name} />{" "}
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
          </div>
          {/* <footer>
            <img className="profile-icon" src={logo} alt="creator" />
            <span className="creator-subtitle">{props.metaverse} - </span>
            {props.city}
          </footer> */}
          </div>
        </div>
      </div>
    </div>
  );
}

