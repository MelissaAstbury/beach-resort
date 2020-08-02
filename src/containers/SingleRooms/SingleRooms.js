import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { RoomContext } from "../../context/RoomContext";

// import defaultBackgroundImage from "../../images/room-1.jpeg";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

//react-router-dom provides the props
const SingleRooms = (props) => {
  const { getRoom } = useContext(RoomContext);
  const [slug, setSlug] = useState(props.match.params.slug);
  const [room, setRoom] = useState(getRoom(slug));
  const [defaultBackgroundImage, setDefaultBackgroundImage] = useState();

  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }
  console.log("hi", room);

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  return (
    <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRooms;
