import logo from "../../assets/icons8-home-app-200.png";
import './Navbar.css'

export default function Navbar(props) {
  function reloadPage () {

    window.location.reload()
  }
  return (
  
      <nav>
        <img onClick={() => reloadPage()} src={logo} alt="house in the clouds" className="nav-logo" />
      </nav>

  );
}
