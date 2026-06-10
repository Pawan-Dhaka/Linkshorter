import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1025] to-black text-white ">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center mb-4">
          How Link<span className="text-pink-500">SHORTNER</span> Works
        </h1>

        <p className="text-center text-gray-400 mb-16">
          Create custom short URLs in just a few seconds.
        </p>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Step-1. Enter Your URL
            </h2>
            <p className="text-gray-300 mb-4">
              Paste the long URL that you want to shorten.
            </p>

            <div className="bg-slate-800 p-3 rounded-md text-gray-400">
              https://www.youtube.com/watch?v=arisepawan
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">
             Step-2. Choose a Keyword
            </h2>

            <p className="text-gray-300 mb-4">
              Pick a custom keyword to make your short URL memorable.
            </p>

            <div className="bg-slate-800 p-3 rounded-md text-gray-400">
              myvideo
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">
             Step-3. Click Generate
            </h2>

            <p className="text-gray-300">
              Our system checks availability and instantly creates your
              shortened URL.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">
             Step-4. Get Your Short Link
            </h2>

            <p className="text-gray-300 mb-4">
              Your new short URL appears immediately below the form.
            </p>

            <div className="bg-slate-800 p-3 rounded-md text-pink-400">
              https://linkshortner.vercel.app/myvideo
            </div>
          </div>
        </div>

    

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/shorten"
            className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-lg font-bold text-lg"
          >
            Try It Now
          </Link>
        </div>

      </div>
    </div>
  );
}
