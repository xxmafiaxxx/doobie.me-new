"use client";

import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// NYC hubs with approximate coverage radii (meters) for early launch zones.
const hubs = [
  { name: "Midtown Manhattan", lat: 40.7534, lng: -73.9765, radius: 3500, status: "live" },
  { name: "Downtown Brooklyn", lat: 40.6928, lng: -73.9903, radius: 3500, status: "live" },
  { name: "Long Island City", lat: 40.7447, lng: -73.9485, radius: 3000, status: "live" },
  { name: "Williamsburg", lat: 40.7142, lng: -73.9614, radius: 3000, status: "soon" },
  { name: "Upper East Side", lat: 40.7736, lng: -73.9566, radius: 3000, status: "soon" },
];

const center: [number, number] = [40.735, -73.97];

/**
 * Interactive service-area map. Rendered client-side only (Leaflet needs
 * window) — see the page that imports it wrap with next/dynamic ssr:false.
 */
export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-2xl"
      style={{ zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hubs.map((hub) => {
        const isLive = hub.status === "live";
        return (
          <Circle
            key={hub.name}
            center={[hub.lat, hub.lng] as L.LatLngExpression}
            radius={hub.radius}
            pathOptions={{
              color: isLive ? "#2576eb" : "#94a3b8",
              fillColor: isLive ? "#3b94f6" : "#cbd5e1",
              fillOpacity: 0.18,
              weight: 1.5,
            }}
          >
            <Tooltip direction="top" sticky>
              <strong>{hub.name}</strong>
              <br />
              {isLive ? "Launching" : "Coming soon"}
            </Tooltip>
          </Circle>
        );
      })}
    </MapContainer>
  );
}
