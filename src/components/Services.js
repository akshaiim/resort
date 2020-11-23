import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        Title: "Free Cocktails",
        info: "Lorem ipsum sdfh hdweijdiew hdwijdweju uhdweujhd.",
      },
      {
        icon: <FaHiking />,
        Title: "Endless Hiking",
        info: "Lorem ipsum sdfh hdweijdiew hdwijdweju uhdweujhd.",
      },
      {
        icon: <FaShuttleVan />,
        Title: "Free Shuttle",
        info: "Lorem ipsum sdfh hdweijdiew hdwijdweju uhdweujhd.",
      },
      {
        icon: <FaBeer />,
        Title: "Strongest Beer",
        info: "Lorem ipsum sdfh hdweijdiew hdwijdweju uhdweujhd.",
      },
    ],
  };
  render() {
    return (
      <div>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (<section key="index" className="service">
                <span>{item.icon}</span>
                <h6>{item.Title}</h6>
                <p>{item.info}</p>
              </section>);
            })}
          </div>
        </section>
      </div>
    );
  }
}
