"use client";

type Props = {
  onClick: () => void;
};

export default function MyLocationButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-24 right-6 w-48 z-[1000]
      flex items-center justify-center gap-2
      bg-gradient-to-r from-blue-600 to-cyan-500
      hover:from-blue-700 hover:to-cyan-600
      text-white
      px-5 py-3
      rounded-full
      shadow-lg
      font-semibold
      transition-all duration-300
      hover:scale-105"
    >
      📍 <span>My Location</span>
    </button>
  );
}