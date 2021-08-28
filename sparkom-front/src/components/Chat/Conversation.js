import React, { useState } from "react";

import GeoLocation from "./GeoLocation";
import MyMsg from "./MyMsg";
import SenderMsg from "./SenderMsg";
export default function Conversation() {
  const [location, setLocation] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    setLocation(<MyMsg location={<GeoLocation />} />);
  };
  return (
    <div className="px-4 py-5 chat-box bg-white">
      {/* Chat Box*/}
      {/* Sender Message*/}
      <SenderMsg />
      <SenderMsg />
      {/* Reciever Message*/}
      <MyMsg />
      {location}

      {/* Typing area */}
      <form className="bg-light">
        <div className="input-group" style={{ height: 20 }}>
          <input
            type="text"
            placeholder="Type a message"
            aria-describedby="button-addon2"
            className="form-control rounded-0 border-0 py-4 bg-light"
          />
          <div className="input-group-append" style={{ height: 62 }}>
            <button
              id="button-addon2"
              type="submit"
              className="btn btn-link bg-primary"
            >
              <i className="fa fa-paper-plane" />
            </button>
            <button
              id="button-addon2"
              type="submit"
              className="btn btn-link bg-primary ml-1"
              onClick={handleClick}
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
