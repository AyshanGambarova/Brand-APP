"use client";
//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
import MapProvider from "@/util/map-provider"; //Map's styling
//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};
export default function Map() {
  const defaultMapCenter = {
    lat: 40.3700819,
    lng: 49.8341662,
  };
  const defaultMapZoom = 18;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "satellite",
  };
  return (
    <MapProvider>
      <div className="w-full h-full">
        {/* Placeholder for the map. Replace this with your Google Maps iframe or component */}
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
    </MapProvider>
  );
}
