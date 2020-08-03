import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { RoomContext } from "../../context/RoomContext";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import StyledHero from "../../components/StyledHero/StyledHero";

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
    <>
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details </h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Information</h3>
            <h6>Price: £{price}</h6>
            <h6>Size: {size} sqft</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets are allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRooms;
