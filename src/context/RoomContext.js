import React, { createContext, useState, useEffect } from "react";

import items from "../data";

export const RoomContext = createContext();

const RoomProvider = (props) => {
  const hello = "hello";
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  //call the formatted data
  useEffect(() => {
    //set rooms
    const rooms = formatData(items);
    //set the featured rooms
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
  }, []);

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

  return (
    <RoomContext.Provider
      value={{
        hello,
        featuredRooms,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;