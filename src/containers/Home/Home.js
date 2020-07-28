import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $399">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
