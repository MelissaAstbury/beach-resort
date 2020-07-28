import React from "react";
import "./App.scss";

import Home from "./containers/Home/Home";
import Rooms from "./containers/Rooms/Rooms";
import SingleRooms from "./containers/SingleRooms/SingleRooms";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <h1>Beach Resort</h1>
      <Home />
      <Rooms />
      <SingleRooms />
      <ErrorPage />
    </div>
  );
};

export default App;
