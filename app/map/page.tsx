import Map from "@/components/map";

export default function MapPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Traffic Map</h1>
      <Map />
    </main>
  );
}