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
    <div
      className="relative w-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark blurred overlay */}
      <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative p-8 text-white">

        <h2 className="text-3xl font-extrabold text-center mb-2">
           Emergency Contacts
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Quick access to important emergency numbers in Morocco.
        </p>

        <div className="space-y-4">

          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm">
            <h3 className="font-bold text-lg">🚓 Police</h3>
            <p className="text-3xl font-black text-cyan-300">
                <a
                href="tel:19"
                className="text-3xl font-black text-cyan-300 hover:underline"
                >
                19
                </a>
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm">
            <h3 className="font-bold text-lg">🚑 Ambulance</h3>
            <p className="text-3xl font-black text-cyan-300">
                <a
                    href="tel:15"
                    className="text-3xl font-black text-cyan-300 hover:underline"
                    >
                    15
                </a>
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm">
            <h3 className="font-bold text-lg">🚒 Fire Brigade</h3>
            <p className="text-2xl font-semibold">
                <a
                href="tel:15"
                className="text-3xl font-black text-cyan-300 hover:underline"
                >
                15
                </a>
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl py-3 font-bold
          bg-gradient-to-r from-blue-600 to-cyan-500
          hover:scale-105 transition shadow-lg"
        >
          Close
        </button>

      </div>
    </div>
  </div>
);
}