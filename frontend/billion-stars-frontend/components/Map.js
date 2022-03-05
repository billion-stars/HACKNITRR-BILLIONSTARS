import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "../styles/Map.module.css";

export default function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhbWlsMDEiLCJhIjoiY2wwY3MzaGxrMDI2aDNqcDlxcTY2ZHhjZCJ9.tBxkMn02CfdKVlWFVWm51Q";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(81.605);
  const [lat, setLat] = useState(21.2497);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([81.605, 21.2497])
      .setPopup(
        new mapboxgl.Popup().setHTML("<h1>Humara clg jo khul nahi raha 😥</h1>")
      )
      .addTo(map.current);

    const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat([81.646, 21.249])
      .addTo(map.current);
  });
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div>
        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
}
