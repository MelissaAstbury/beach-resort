import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Rooms from "./containers/Rooms/Rooms";
import SingleRooms from "./containers/SingleRooms/SingleRooms";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:single" exact component={SingleRooms} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
