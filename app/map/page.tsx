import Map from "@/components/map";

export default function MapPage() {
  return (
    <main
  className="min-h-screen bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: "url('/background.jpg')",
  }}
>
  <div className="min-h-screen bg-black/70 backdrop-blur-sm px-8 py-10">

    <div className="max-w-7xl mx-auto">

      <h1 className="text-center text-6xl md:text-7xl font-black tracking-tight mb-3">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
         Smart Traffic
        </span>
      </h1>

      <p className="text-center text-xl text-gray-200 mb-10">
        Real-time Community Traffic Reporting
      </p>

      <Map />

    </div>

  </div>
</main>
  );
}