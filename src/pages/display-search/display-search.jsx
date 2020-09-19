import React, { Component } from "react";
import L from "leaflet";

export default class DisplaySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createMap = () => {
    this.map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1Ijoia2lwcmFzaG9uIiwiYSI6ImNrYzRudXY2djA5bTEzMWxtejZraWs2ZWkifQ.h9wMvBo-oDBKYWI0WyIsTA",
      }
    ).addTo(this.map);
  };

  componentDidMount() {
    //show the map
    this.createMap();
    //get the current user location

    //get the slug as the destination
    let slug = this.props.match.params.slug;

    // use the user location and the slug as the destination to find where the user is going
  }
  render() {
    return (
      <div className="container-fluid bg-secondary">
        <div className="row bg-secondary">
          <div className="card  w-100 map-container text-white  row justify-content-center align-items-center pl-5">
            <div id="map" className="w-100"></div>
          </div>
          <div className="card w-100">
            <div className="row justify-content-center mt-1 p-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
