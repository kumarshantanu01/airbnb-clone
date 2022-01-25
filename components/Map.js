import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.5775,
    longitude: -122.4385,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/kumarshantanu/ckyttr0ai000s14o4iulkxq2d"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
