import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteShop, filterShop, showShop } from "../state/action";
import ReactGA from 'react-ga';
import { useEffect } from "react";

import { withRouter } from "react-router-dom";
ReactGA.initialize('G-8W242QMKEK');
const Home = () => {
  
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
  const shoplist = useSelector((state) => state.shop);
  let show = <h1>No Shop Found</h1>;
  const dispatch = useDispatch();
  if (shoplist.length > 0) {
    show = shoplist.map((item, index) => {
      return (
        <div className="card" key={index}>
          <p className="name">{item.shopName}</p>
          <p className="area">{item.area}</p>
          <p className="category">{item.category}</p>
          <p className="date">opening date: {item.openingDate}</p>
          <p className="date">closing date: {item.closingDate}</p>
          <button
            className="delete"
            onClick={() => dispatch(deleteShop(index))}
          >
            Delete
          </button>
        </div>
      );
    });
  }
  return (
    <div>
      <div>
        <div className="filter">
          <select className="filter-select" onChange={(e) => dispatch(filterShop(e.target.value, "CATEGORY") )}>
            <option value="">Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Grocery">Stationery shop</option>
          </select>
          <button className="showall" onClick={() => dispatch(showShop())}>Show All</button>
          <select className="filter-select" onChange={(e) => dispatch(filterShop(e.target.value, "AREA") )}>
            <option value="">Select area</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>
        </div>
      </div>
      <div className="home">{show}</div>
    </div>
  );
};

export default withRouter(Home);
