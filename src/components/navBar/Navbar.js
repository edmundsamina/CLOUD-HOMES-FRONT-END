import logo from "../../assets/icons8-home-app-200.png";
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className="landing-container">
      <nav>
        <img src={logo} alt="house in the clouds" className="nav-logo" />
      </nav>
    </div>
  );
}
