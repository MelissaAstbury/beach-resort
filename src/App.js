import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Rooms from "./containers/Rooms/Rooms";
import SingleRooms from "./containers/SingleRooms/SingleRooms";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms" exact component={Rooms} />
      <Route path="/rooms/:single" exact component={SingleRooms} />
      <Route component={ErrorPage} />
    </Switch>
  );

  return (
    <React.Fragment>
      <Header />
      {routes}
    </React.Fragment>
  );
};

export default App;
