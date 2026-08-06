"use client";

import ReportModal from "./ReportModal"; 
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ReportButton from "./ReportButton";  
import MyLocationButton from "./MyLocationButton";
import EmergencyButton from "./EmergencyButton";
import EmergencyModal from "./EmergencyModal";

const LeafletMap = dynamic(() => import("./LeafletMap"), 
{ ssr: false,
loading: () => <p>Loading map...</p> 
});

export default function Map() {
  type Report = {
    id: number;
    lat: number;
    lng: number;
    category: string;
    description: string;
  }
  const [isReporting, setIsReporting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

    const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [goToUserLocation, setGoToUserLocation] = useState(false);

  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);


  useEffect(() => {
    const savedReports = localStorage.getItem("reports");

    if (savedReports) {
      setReports(JSON.parse(savedReports));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reports", JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("could not get user location:", error);
        }
        
      );

  }, []);

    const filteredReports = 
      selectedCategory === "All" 
      ? reports 
      : reports.filter(
        (report) => report.category === selectedCategory
      );


  return (
    <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
<div className="mb-6 flex flex-col items-center">
  <h2 className="text-3xl font-extrabold tracking-tight text-white">
  Traffic Reports
</h2>

<p className="mt-2 mb-6 text-gray-300 text-lg">
  Filter incidents by category
</p>

  <div className="flex flex-wrap justify-center gap-3">
    {[
      { label: "All", icon: "🌍" },
      { label: "Accident", icon: "🚗" },
      { label: "Traffic", icon: "🚦" },
      { label: "Road Work", icon: "🚧" },
      { label: "Hazard", icon: "⚠️" },
    ].map(({ label, icon }) => (
      <button
        key={label}
        onClick={() => setSelectedCategory(label)}
        className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-all duration-200
        ${
          selectedCategory === label
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
            : "bg-white text-gray-700 border border-gray-200 shadow hover:shadow-md hover:-translate-y-0.5 hover:bg-gray-50"
        }`}
      >
        <span className="text-lg">{icon}</span>
        {label}
      </button>
    ))}
  </div>
</div>
    <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl">
      <LeafletMap 
      isReporting={isReporting}
      setIsReporting={setIsReporting}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      setIsModalOpen={setIsModalOpen}
      reports={filteredReports}
      userLocation={userLocation}
      goToUserLocation={goToUserLocation}
      setGoToUserLocation={setGoToUserLocation}
      />  
      
      <ReportButton 
        isReporting={isReporting}
        setIsReporting={setIsReporting}
      />

      <MyLocationButton
        onClick={() => setGoToUserLocation(true)}
/>

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedLocation={selectedLocation}
        setReports={setReports}
      />
    
      <EmergencyButton
        onClick={() => setIsEmergencyOpen(true)}
      />  

      <EmergencyModal
      isOpen={isEmergencyOpen}
      onClose={() => setIsEmergencyOpen(false)}
      />  
      
    </div>
  </div>
  );
}
 