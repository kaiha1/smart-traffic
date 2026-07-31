"use client";

import dynamic from "next/dynamic";
import ReportButton from "./ReportButton";  

const LeafletMap = dynamic(() => import("./LeafletMap"), 
{ ssr: false,
loading: () => <p>Loading map...</p> 
});

export default function Map() {
  return (
    <div className="w-full h-[600px]  rounded-xl overflow-hidden">
      <LeafletMap />
      <ReportButton />
    </div>
  );
}
     