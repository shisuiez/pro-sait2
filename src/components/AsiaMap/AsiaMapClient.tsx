"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function AsiaMapClient() {
  return (
    <div className="w-full max-w-[600px] h-[350px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden mx-auto">
      <MapContainer
        center={[40, 100]}
        zoom={3}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
} 