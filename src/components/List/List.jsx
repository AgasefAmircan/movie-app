import React from "react";
import ListPage from "../../pages/ListPage/ListPage";
import { Switch, Route, Link } from "react-router-dom";
const List = () => {
  return (
    <nav>
      <Link to="/list" target="_blank">
        Pass to list
      </Link>
      <Switch>
        <Route path="/list">
          <ListPage />
        </Route>
      </Switch>
    </nav>
  );
};

export default List;
