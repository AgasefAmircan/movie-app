import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./reset.css";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/list/:id"  component={ListPage} />
            <Route path="/list/:id?" exact component={ListPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
