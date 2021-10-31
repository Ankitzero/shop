import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddShops from "./components/AddShops";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addshops">
            <AddShops />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
