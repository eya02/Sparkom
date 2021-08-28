import { useState, useEffect } from "react";

export default function useGeoLocation() {
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const onSuccess = (location) => {
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  

  const onError = (error) => {
    setLocation({ error });
  };
  useEffect(() => {
    //check if the browser support the geolocation api or not
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
}
