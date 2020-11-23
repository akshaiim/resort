import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Room from "../components/Room";
import StyledHero from "../components/styledHero";

export default class Singleroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such rooms found...</h3>
          <Link to="/rooms" className="btn-primary">
            Go to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      pets,
      breakfast,
      images,
      info,
    } = room;

    const [mainImg, ...defaultImgs] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Go to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
        </section>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>{info}</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              max-capacity :{" "}
              {{ capacity } > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>

        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
