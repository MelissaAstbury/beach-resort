import React, { useContext } from "react";

import { RoomContext } from "../../context/RoomContext";
import Loading from "../Loading/Loading";
import Rooms from "../Room/Room";
import Title from "../Title/Title";

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(RoomContext);
  const allRooms = rooms.map((room) => {
    return <Rooms key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured-rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : allRooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
