import Link from "next/link";



export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            About <Link href={"/"} className=''>Link<span className='text-pink-500'>SHORTNER</span></Link>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            LinkSHORTNER is a fast, simple, and completely free URL shortening
            platform built for everyone. No sign-ups, no subscriptions, and no
            unnecessary steps—just paste your long URL and get a clean,
            shareable link in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-semibold text-pink-500">
               Fast
            </h2>
            <p className="mt-4 text-gray-400">
              Generate short links instantly with a streamlined experience
              designed for speed and simplicity.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-semibold text-pink-500">
               Free
            </h2>
            <p className="mt-4 text-gray-400">
              No subscriptions, hidden charges, or premium plans. Everyone gets
              access to the same fast and reliable service.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-semibold text-pink-500">
              Simple
            </h2>
            <p className="mt-4 text-gray-400">
              No accounts to create and no complicated dashboard. Paste, shorten,
              and share in just a few clicks.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            We believe link shortening should be accessible to everyone. Our
            mission is to provide a reliable, lightning-fast, and user-friendly
            platform that helps people create short links without barriers,
            registrations, or unnecessary complexity.
          </p>
        </div>
         <div className="flex items-center justify-center mt-8 gap-4">
        <Link href={"/shorten"} className='bg-pink-400 hover:scale-105  font-bold  hover:bg-pink-500 text-black rounded-lg  px-2 text-2xl' >Try Now</Link>
        </div> 
      </div>
      
    </div>
  );
}