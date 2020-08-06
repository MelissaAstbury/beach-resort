import React, { createContext, useState, useEffect } from "react";

// import items from "../data";
import Client from "../Contentful";

export const RoomContext = createContext();

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(1000);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  //get Data from contentful
  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt",
      });
      //set rooms
      const rooms = formatData(response.items);
      //set the featured rooms
      const featuredRooms = rooms.filter((room) => room.featured === true);
      //always show the max price as default
      const maxPrice = Math.max(...rooms.map((item) => item.price));
      //always show the max price as default
      const maxSize = Math.max(...rooms.map((item) => item.size));

      setRooms(rooms);
      setSortedRooms(rooms);
      setFeaturedRooms(featuredRooms);
      setLoading(false);
      setMaxPrice(maxPrice);
      setPrice(maxPrice);
      setMaxSize(maxSize);
    } catch (error) {
      console.log(error);
    }
  };

  //call the formatted data
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filteredRooms();
  }, [
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  ]);

  //format data is getting all the required fields we want to pull from the originl data
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);

      const room = { ...item.fields, images: images, id: id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "minPrice":
        setMinPrice(value);
        break;
      case "maxPrice":
        setMaxPrice(value);
        break;
      case "minSize":
        setMinSize(value);
        break;
      case "maxSize":
        setMaxSize(value);
        break;
      case "breakfast":
        setBreakfast(value);
        break;
      case "pets":
        setPets(value);
        break;
      default:
        return;
    }
  };

  const filteredRooms = () => {
    let tempRooms = [...rooms];

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    //filter by capacity
    if (capacity !== "1") {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    //filter price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //filter for breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    //filter for pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // update avalible rooms
    setSortedRooms(tempRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        getRoom,
        loading,
        sortedRooms,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange,
        filteredRooms,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
