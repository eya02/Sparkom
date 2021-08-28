import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import useGeoLocation from "../../hooks/useGeoLocation";
export default function GeoLocation() {
  const mapContainer = useRef();
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
  const { lat, lng } = useGeoLocation();
  console.log(lat, lng);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 10,
    });
    new mapboxgl.Marker({ color: "red" }).setLngLat([lng, lat]).addTo(map);
    return () => map.remove();
  }, [lat, lng]);
  return (
    <div>
      <div
        className="map-container"
        style={{
          width: 400,
          height: 400,
        }}
        ref={mapContainer}
      />
    </div>
  );
}
