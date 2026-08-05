"use client";

import ReportModal from "./ReportModal"; 
import {useState} from "react";
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
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <div className=" relative w-full h-[600px]  rounded-xl overflow-hidden">
      <LeafletMap 
      isReporting={isReporting}
      setIsReporting={setIsReporting}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      setIsModalOpen={setIsModalOpen}
      reports={reports}
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
  );
}
     