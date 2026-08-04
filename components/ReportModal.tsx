"use client";

type ReportModalProps = {
    isOpen : boolean; 
    onClose: () => void;
};

export default function ReportModal({
    isOpen,
    onClose,
}: ReportModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-xl p-6 w-[400px]" shadow-xl>
                <h2 className="text-2xl font-bold mb-4" >
                    Report an Incident
                </h2>

                <label className="block mb-2 font-medium">
                    Category
                </label>

                <select className="w-full border rounded-lg p-2 mb-4">
                    <option>Accident</option>
                    <option>Traffic</option>
                    <option>Road Work</option>
                    <option>Hazard</option>
                </select>

                <label className="block mb-2 font-medium">
                    Description
                </label>

                <textarea 
                className="w-full border rounded-lg p-2 mb-4"
                rows={4}
                placeholder="Describe what happened..."
                />

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-300"
                        >
                            Cancel
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}