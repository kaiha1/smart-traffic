"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, useMapEvents, Marker, TileLayer } from "react-leaflet";
import { Dispatch, SetStateAction } from "react";

type LeafletMapProps = {
    isReporting: boolean;
    setIsReporting: Dispatch<SetStateAction<boolean>>;
    selectedLocation: { 
        lat: number; 
        lng: number 
    } | null;
    setSelectedLocation: Dispatch<SetStateAction<{ 
        lat: number; 
        lng: number 
    } | null>
    >;
}

function MapClickHandler({
    isReporting,
    setIsReporting,
    setSelectedLocation
}: {
    isReporting: boolean;
    setIsReporting: Dispatch<SetStateAction<boolean>>;
    setSelectedLocation: Dispatch<
    SetStateAction<{
        lat: number; 
        lng: number 
    } | null>
    >;
}) {
    useMapEvents({
        click(e) {
            if (!isReporting) return;
            setSelectedLocation({ 
                lat: e.latlng.lat, 
                lng: e.latlng.lng,
            });

            setIsReporting(false);
        },
    });

    return null;
}




export default function LeafletMap({
    isReporting,
    setIsReporting,
    selectedLocation,
    setSelectedLocation
}: LeafletMapProps) {
    return (
        <MapContainer
        center={[31.7917, -7.0926]} // Centered on Morocco
        zoom={6}
        style={{ height: "100%  ", width : "100%" }}

        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            <MapClickHandler
                isReporting={isReporting}
                setIsReporting={setIsReporting}
                setSelectedLocation={setSelectedLocation}
            />
            {selectedLocation && (
                <Marker position={[
                    selectedLocation.lat, 
                    selectedLocation.lng
                ]} 
                />
            )}
        </MapContainer>
    );
}