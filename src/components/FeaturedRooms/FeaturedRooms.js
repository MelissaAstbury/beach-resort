import React, { useContext } from "react";

import { RoomContext } from "../../context/RoomContext";

const FeaturedRooms = () => {
  const { hello } = useContext(RoomContext);
  console.log(hello);
  const { featuredRooms: rooms } = useContext(RoomContext);
  console.log(rooms);
  return (
    <div>
      <p>Featured Rooms {hello}</p>
    </div>
  );
};

export default FeaturedRooms;
