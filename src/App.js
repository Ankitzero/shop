import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddShops from "./components/AddShops";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RouteChangeTracker from './RouteChangeTracker' 
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.pathname + window.location.search);
const TRACKING_ID = "G-NZ3PRLBMZQ"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
// import InlineStyleComponent from "./examples/InlineStyleComponent";
function App() {
  <RouteChangeTracker />
  return (
    <div>
      {/* <InlineStyleComponent /> */}
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/addshops/:id/home/:name/:age"> */}
          <Route exact path="/addshops">
            <AddShops />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
