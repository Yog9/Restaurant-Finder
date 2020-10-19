import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import notFound from "./components/notFound";
import Home from "./components/Home";
import updatePage from "./components/updatePage";
import RestaurantsContextProvider from "./context/RestaurantsContext";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetails}
            />
            <Route
              exact
              path="/restaurants/:id/update"
              component={updatePage}
            />
            <Route component={notFound} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
