import React, { useContext } from "react";

import { RoomContext } from "../../context/RoomContext";
import Title from "../Title/Title";

//get all unique values
const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  //get unique types
  let types = getUniqueValues(rooms, "type");
  //add all
  types = ["all", ...types];
  //map throught JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get number of people - capacity
  let people = getUniqueValues(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}

        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price £{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
      </form>
    </section>
  );
};

export default RoomFilter;
