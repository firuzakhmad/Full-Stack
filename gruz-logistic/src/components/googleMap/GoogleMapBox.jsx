import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import "./googleMapStyles/googleMap.css";
import { AllAppContext } from "../../context/AllAppContext.js";
import { useContext, useState } from "react";

const GoogleMapBox = () => {
  const { directionsResponse, isLoaded } = useContext(AllAppContext);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const center = { lat: 43.25667, lng: 76.92861 };

  if (!isLoaded) return null;

  return (
    <div className="map-container ">
      <GoogleMap
        center={center}
        zoom={6}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => setMap(map)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapBox;
