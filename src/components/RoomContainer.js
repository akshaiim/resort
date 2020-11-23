import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const {loading, sortedRooms, rooms} = value;
        if(loading){
            return <Loading/>;
        }
        return (
          <div>
           
            <RoomsFilter rooms = {rooms}/>
            <RoomsList rooms={sortedRooms}/>
          </div>
        );
      }}
      
    </RoomConsumer>
  );
}
