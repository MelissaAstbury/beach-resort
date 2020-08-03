import React, { useContext } from "react";

import { RoomContext } from "../../context/RoomContext";
import Loading from "../Loading/Loading";
import RoomFilter from "../RoomFilter/RoomFilter";
import RoomList from "../RoomList/RoomList";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <p>Hello from rooms container</p>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
