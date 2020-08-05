import React from "react";

import Room from "../../components/Room/Room";

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunatly no rooms matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomlist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
