"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, 
        useMap,
        useMapEvents, 
        Marker, 
        TileLayer,
        Popup } from "react-leaflet";
import { Dispatch, SetStateAction, useEffect } from "react";
type Report = {
    id: number;
    lat: number;
    lng: number;
    category: string;
    description: string;
};

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
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;

    reports: Report[];
    userLocation: {
        lat: number;
        lng: number;
    } | null;

    goToUserLocation: boolean;
    setGoToUserLocation: Dispatch<SetStateAction<boolean>>;
}

function MapClickHandler({
    isReporting,
    setIsReporting,
    setSelectedLocation,
    setIsModalOpen, 
}: {
    isReporting: boolean;
    setIsReporting: Dispatch<SetStateAction<boolean>>;
    setSelectedLocation: Dispatch<
    SetStateAction<{
        lat: number; 
        lng: number 
    } | null>
    >;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
    useMapEvents({
        click(e) {
            if (!isReporting) return;
            setSelectedLocation({ 
                lat: e.latlng.lat, 
                lng: e.latlng.lng,
            });

            setIsReporting(false);
            
            setIsModalOpen(true);
        },
    });

    return null;
}


function MapUpdater({
  userLocation,
  goToUserLocation,
  setGoToUserLocation,
}: {
  userLocation: {
    lat: number;
    lng: number;
  } | null;
  goToUserLocation: boolean;
  setGoToUserLocation: Dispatch<SetStateAction<boolean>>;
}) {
  const map = useMap();

  useEffect(() => {
    if (goToUserLocation && userLocation) {
      map.flyTo([userLocation.lat, userLocation.lng], 15);

      setGoToUserLocation(false);
    }
  }, [goToUserLocation, userLocation, map, setGoToUserLocation]);

  return null;
}



export default function LeafletMap({
    isReporting,
    setIsReporting,
    selectedLocation,
    setSelectedLocation,
    setIsModalOpen,
    reports,
    userLocation,
    goToUserLocation,
    setGoToUserLocation,
}: LeafletMapProps) {
    return (
        <MapContainer
        center= {
            userLocation
            ? [userLocation.lat, userLocation.lng]
            : [51.505, -0.09]
        }
        zoom={6}
        style={{ height: "100%  ", width : "100%" }}

        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            <MapUpdater
                userLocation={userLocation}
                goToUserLocation={goToUserLocation}
                setGoToUserLocation={setGoToUserLocation}
            />


            <MapClickHandler
                isReporting={isReporting}
                setIsReporting={setIsReporting}
                setSelectedLocation={setSelectedLocation}
                setIsModalOpen={setIsModalOpen}
            />
            {reports.map((report) => (
                <Marker
                    key={report.id}
                    position={[report.lat, report.lng]}
                >
                    <Popup>
                        <div className="text-black">
                            <h3 className="font-bold text-lg">
                                {report.category}
                                </h3>

                            <p>{report.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
            
        </MapContainer>
    );
}