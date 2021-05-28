import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Order from "./components/Dashboard/Order/Order";
import Review from "./components/Dashboard/Review/Review";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
//import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
//import Review from "./components/Testimional/Testimional";
// import Review from "./components/Review/Review";
// import AddService from "./Dashboard/AddService/AddService";
// import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
// import Order from "./Dashboard/Order/Order";
// import ServiceList from "./DashBoard/ServiceList/ServiceList";




function App() {
  return (
    <>
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path='/dashboard/foods-list'>
            <ServiceList></ServiceList>
          </Route>

          <Route exact path='/dashboard/order'>
            <Order></Order>
          </Route>

          <Route exact path='/dashboard/review'>
            <Review></Review>
          </Route>

          <Route exact path='/dashboard/add-foods'>
            <AddService></AddService>
          </Route>

          <Route exact path='/dashboard/make-admin'>
            <MakeAdmin></MakeAdmin>
          </Route>
      </Switch>
    </Router>
  
    </>
  );
}

export default App;
