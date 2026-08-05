"use client";

import ReportModal from "./ReportModal"; 
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ReportButton from "./ReportButton";  


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
    <div className="w-full">
    <div className="flex gap-2 mb-4 justify-center flex-wrap">
  {["All", "Accident", "Traffic", "Road Work", "Hazard"].map(
    (category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-4 py-2 rounded-lg transition ${
          selectedCategory === category
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        {category}
      </button>
    )
  )}
</div>
    <div className= " relative h-[600px] rounded-xl overflow-hidden">
      <LeafletMap 
      isReporting={isReporting}
      setIsReporting={setIsReporting}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      setIsModalOpen={setIsModalOpen}
      reports={filteredReports}
      userLocation={userLocation}
      />  
      
      <ReportButton 
        isReporting={isReporting}
        setIsReporting={setIsReporting}
      />

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedLocation={selectedLocation}
        setReports={setReports}
      />
    </div>
  </div>
);
}
     