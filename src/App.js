import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddShops from "./components/AddShops";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import InlineStyleComponent from "./examples/InlineStyleComponent";
function App() {
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
