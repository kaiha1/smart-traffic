import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      {/* Dark blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <div
          style={{ fontFamily: "Arial, sans-serif" }}
          className="text-4xl font-bold text-white mb-3"
        >
          مدينتي
        </div>

        <h1
          className="text-6xl md:text-7xl font-black tracking-tight"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Smart Traffic
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-xl">
          𝙈𝙤𝙧𝙤𝙘𝙘𝙖𝙣 𝙩𝙧𝙖𝙛𝙛𝙞𝙘 𝙧𝙚𝙥𝙤𝙧𝙩𝙞𝙣𝙜 𝙖𝙥𝙥.
        </p>

        <Link href="/map">
          <button className="mt-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:shadow-2xl">
             Open Smart Traffic
          </button>
        </Link>

      </div>
    </main>
  );
}