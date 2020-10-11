import React from "react";
import "./style/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />      
          <Route path="/checkout"  component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
