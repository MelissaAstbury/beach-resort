import React, { createContext, useState } from "react";

export const RoomContext = createContext();

const RoomProvider = (props) => {
  // const initialState = JSON.parse(localStorage.getItem("rooms")) || [];

  // const [room, setRoom] = useState(initialState);
  const hello = "hello";
  return (
    <RoomContext.Provider
      value={{
        hello,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

// const RoomConsumer = RoomContext.Consumer;

export default RoomProvider;
// export { RoomProvider, RoomContext, RoomConsumer };
