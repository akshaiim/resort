import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import "../App.css";

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  const {
    handleChange,
    capacity,
    type,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    price,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");

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
        {/* //select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
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
        {/* //end of select type */}

        {/* check guests */}
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
        {/* //endof guests */}
        {/* //price filter */}
        <div className="form-group">
          <label htmlFor="pricee">room price ${price} </label>
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
        {/* end of price */}

        {/* filter by size */}
        <div className="form-group">
          <label htmlFor="size">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        {/* filter by breakfast and pets */}

        <div className="form-group">
          <div className="input-extras">
            <input
              type="checkbox"
              name="breakfast"
              label="breakfast"
              onChange={handleChange}
              checked={breakfast}
            />
            <label htmlFor="breakfast">breakfast</label>

            <input
              type="checkbox"
              name="pets"
              label="pets"
              onChange={handleChange}
              checked={pets}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
