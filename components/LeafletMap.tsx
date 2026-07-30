"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function LeafletMap() {
    return (
        <MapContainer
        center={[31.7917, -7.0926]} // Centered on Morocco
        zoom={6}
        style={{ height: "100%  " }}

        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
        </MapContainer>
    );
}