import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import StyledButton from "../../components/StyledHero/StyledHero";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms starting at $399"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <ServicesSection />
      <FeaturedRooms />
      <StyledButton>Hello</StyledButton>
    </>
  );
};

export default Home;
