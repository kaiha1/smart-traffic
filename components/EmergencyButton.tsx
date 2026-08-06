"use client";

type Props = {
  onClick: () => void;
};

export default function EmergencyButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-44 right-6 z-[1000] bg-green-600 text-white rounded-full px-5 py-3"
    >
      🚑 Emergency
    </button>
  );
}