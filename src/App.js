import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoFound from "./components/NoFound/NoFound";
import Product from "./components/Product/Product";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/product/:key">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
