export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div style={{ fontFamily: 'Arial, sans-serif' }} className="text-3xl font-semibold mb-4">
      مدينتي
    </div>
      <h1 className="text-5xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
        Smart Traffic
      </h1>


      <p className="mt-4 text-blue-600" >
        𝙈𝙤𝙧𝙤𝙘𝙘𝙖𝙣 𝙩𝙧𝙖𝙛𝙛𝙞𝙘 𝙧𝙚𝙥𝙤𝙧𝙩𝙞𝙣𝙜 𝙖𝙥𝙥.
      </p>

      <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white">
        Open Map
      </button>
    </main>
  );
}