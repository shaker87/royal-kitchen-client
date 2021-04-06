import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";




function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
      </Switch>
    </Router>
  
    </>
  );
}

export default App;
