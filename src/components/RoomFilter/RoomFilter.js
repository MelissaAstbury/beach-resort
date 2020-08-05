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
  console.log(
    capacity,
    price,
    minSize,
    minPrice,
    maxPrice,
    maxSize,
    breakfast,
    pets
  );
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
      </form>
    </section>
  );
};

export default RoomFilter;
