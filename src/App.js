import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Order from "./components/Dashboard/Order/Order";
import Review from "./components/Dashboard/Review/Review";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard/foods-list">
            <ServiceList></ServiceList>
          </Route>

          <Route exact path="/dashboard/order">
            <Order></Order>
          </Route>

          <Route exact path="/dashboard/review">
            <Review></Review>
          </Route>

          <Route exact path="/dashboard/add-foods">
            <AddService></AddService>
          </Route>

          <Route exact path="/dashboard/make-admin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
