import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Shop</Link>
      </div>
      <div className="navbar-links">
        {/* <Link className="navbar-link" to="/addshops/1/home/amit/16"> */}
        <Link className="navbar-link" to="/addshops">
          Add Shops
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
