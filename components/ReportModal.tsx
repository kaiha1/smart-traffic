"use client";

import { useState } from "react";


type Report = {
    id: number;
    lat: number;
    lng: number;
    category: string;
    description: string;
};

type ReportModalProps = {
    isOpen : boolean; 
    onClose: () => void;

    selectedLocation: {
        lat: number;
        lng: number;
    } | null;

    setReports: React.Dispatch<React.SetStateAction<Report[]>>;
};

export default function ReportModal({
    isOpen,
    onClose,
    selectedLocation,
    setReports
}: ReportModalProps) {
    
    const [category, setCategory] = useState("Accident");
    const [description, setDescription] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
            <div
                className="relative w-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                style={{
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
            }}
            >
                {selectedLocation && (
                    <div className="bg-white/10 rounded-xl p-3 mb-5 text-white text-sm">
                        <p>📍 Latitude: {selectedLocation.lat.toFixed(5)}</p>
                        <p>📍 Longitude: {selectedLocation.lng.toFixed(5)}</p>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

                <div className="relative p-8">

                <h2 className="text-3xl font-extrabold text-center mb-2 text-white drop-shadow-lg">
                    Report an Incident
                </h2>
                <p className="text-center text-gray-300 mb-8">
                    Help drivers stay safe by reporting traffic events.
                </p>

                <label className="block mb-2 text-white font-semibold">
                    Category
                </label>

                <select 
                    className="w-full rounded-xl bg-white/15 border border-white/30 text-white p-3 mb-5 backdrop-blur-sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option className="bg-gray-900 text-white">Accident</option>
                    <option className="bg-gray-900 text-white">Traffic</option>
                    <option className="bg-gray-900 text-white">Road Work</option>
                    <option className="bg-gray-900 text-white">Hazard</option>
                </select>

                <label className="block mb-2 text-white font-semibold">
                    Description
                </label>

                <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/30 text-white placeholder-gray-300 p-3 mb-5 backdrop-blur-sm"
                rows={4}
                placeholder="Describe what happened..."
                />

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white transition"
                        >
                            Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (!selectedLocation) return;
                                if (!selectedLocation) return;

                                setReports((prev) => [
                                    ...prev,
                                    {
                                        id: Date.now(),
                                        lat: selectedLocation.lat,
                                        lng: selectedLocation.lng,
                                        category,
                                        description,
                                    },
                                ]);

                                setDescription("");
                                setCategory("Accident");

                                onClose();
                            }}

                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:scale-105 transition"
                    >
                        Submit
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}