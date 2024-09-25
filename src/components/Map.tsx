"use client";
//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api"; //Map's styling
//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};
export default function Map() {
  const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004,
  };
  const defaultMapZoom = 18;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "satellite",
  };
  return (
    <div className="w-full h-full">
      {/* Placeholder for the map. Replace this with your Google Maps iframe or component */}
      <h2 className="text-center text-2xl">Map Placeholder</h2>
      <div className="bg-gray-200 h-96 flex items-center justify-center">
        {/* You can replace this div with an actual map */}
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        >
          <Marker position={defaultMapCenter} />
        </GoogleMap>
      </div>
    </div>
  );
}
