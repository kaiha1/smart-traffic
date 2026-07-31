"use client";

import { useState } from "react"; 
export default function ReportButton() {
    const [isReporting, setIsReporting] = useState(false);

    const handleReport = () => {
        setIsReporting(true);
        // Simulate report submission
        setTimeout(() => {
            setIsReporting(false);
        }, 2000);
    };

    return (
        <button
            className ="absolute bottom-6 right-6 bg-red-600 text-white px-5
            py-3 rounded-full shadow-lg transition  
            "
            onClick={handleReport}
        >
            {isReporting ? "Click anywhere on the map..." : "Report an Incident"}
        </button>
    )
}