"use client";

type ReportButtonProps = {
    isReporting: boolean;
    setIsReporting: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReportButton( {
    isReporting,
    setIsReporting,
}: ReportButtonProps) {


    return (
        <button
            className ="absolute bottom-6 right-6 bg-red-600 text-white px-5
            py-3 rounded-full shadow-lg transition  
            "
            onClick={() => setIsReporting(true)}
        >
            {isReporting ? "Click anywhere on the map..." : "Report an Incident"}
        </button>
    )
}