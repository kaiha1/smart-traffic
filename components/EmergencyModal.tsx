"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EmergencyModal({
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl p-6 w-[420px] text-black">

        <h2 className="text-2xl font-bold mb-4">
          🚨 Emergency Contacts
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-3">
            <h3 className="font-bold">🚓 Police</h3>
            <p className="text-lg">19</p>
          </div>

          <div className="border rounded-xl p-3">
            <h3 className="font-bold">🚑 Ambulance</h3>
            <p className="text-lg">15</p>
          </div>

          <div className="border rounded-xl p-3">
            <h3 className="font-bold">🚒 Fire Brigade</h3>
            <p className="text-lg">15</p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2"
        >
          Close
        </button>

      </div>
    </div>
  );
}