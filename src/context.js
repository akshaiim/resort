import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);

    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    capacity = parseInt(capacity);
    price = parseInt(price);
    maxSize = parseInt(maxSize);
    minSize = parseInt(minSize);
    let tempRooms = [...rooms];
    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((item) => item.price <= price);

    tempRooms = tempRooms.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((item) => item.breakfast == true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((item) => item.pets == true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomContext, RoomProvider };
