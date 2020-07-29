import React, { useContext } from "react";

import { RoomContext } from "../../context/RoomContext";

const FeaturedRooms = () => {
  const { hello } = useContext(RoomContext);
  console.log(hello);
  return (
    <div>
      <p>Featured Rooms</p>
    </div>
  );
};

export default FeaturedRooms;
