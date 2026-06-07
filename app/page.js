import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="grid sm:grid-cols-2 grid-cols-1    ">
        <div className="flex flex-col justify-center items-center gap-10">
          <h2 className=" poppins-semibold sm:text-4xl text-2xl text-center">Best URL Shortener on the Internet</h2>
          <p className="w-3/4 text-center  sm:poppins-regular sm:font-semibold">Transform long, messy URLs into short, memorable links in seconds. No accounts to create, no payments to make, and no unnecessary steps—just a simple, powerful URL shortener built for <span className="text-pink-400 font-bold">Everyone</span>.</p>
          <div className="flex gap-8 text-xl -mt-3 ">
            <Link href={"/shorten"} className=' test-center bg-pink-400 hover:scale-105  font-bold  hover:bg-pink-500 text-black rounded-lg px-2' >Try Now</Link>
          </div>
        </div>

        <div className="flex justify-center sm:order-last order-first">
          <img className=" brightness-75 contrast-125 sm:h-[70vh] " src="/vector.png" alt="Url short image" />
        </div>
      </section>
      <section className="grid sm:grid-cols-2 grid-cols-1  ">
        <div className="flex justify-center">
          <img className=" brightness-75  sm:h-[70vh] " src="/clock.png" alt="Url short image" />
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h2 className=" poppins-semibold sm:text-4xl text-2xl text-center">Shorten Links in Seconds</h2>
          <p className="w-3/4 text-center  sm:poppins-regular sm:font-semibold">Say goodbye to long, cluttered URLs. Our platform lets you create clean, professional, and easy-to-share links in seconds, with no sign-ups, no hidden fees, and no complicated setup.</p>
          <div className="flex gap-8 text-xl -mt-3 ">
            <Link href={"/shorten"} className='text-center bg-pink-400 hover:scale-105  font-bold  hover:bg-pink-500 text-black rounded-lg px-2' >Try Now</Link>
            
          </div>
        </div>

      </section>
    </>
  );
}
