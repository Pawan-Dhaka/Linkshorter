import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=''>
       <div className="flex p-2 bg-[#100e21] sm:justify-between flex-col sm:flex-row">
      <div className="logo flex items-center justify-center ">
        <Link href={"/"} className='font-bold text-xl'>Link<span className='text-pink-500'>SHORTNER</span></Link>
      </div>
      <div className="components flex  justify-between items-center text-lg gap-8">
        <Link className='hover:text-pink-500 hover:scale-105' href={"/"}>Home</Link>
        <Link className='hover:text-pink-500 hover:scale-105' href={"/about"}>About</Link>
        <div className="flex sm:gap-4 ">
        <Link href={"/shorten"} className='bg-pink-400 hover:scale-105  font-bold  hover:bg-pink-500 text-black rounded-lg px-2' >Try Now</Link>
        <Link href={"https://github.com/Pawan-Dhaka"} className='bg-pink-400 hover:scale-105 font-bold hover:bg-pink-500 text-black rounded-lg px-2 hidden sm:block'>GitHub</Link>
        </div> 

      </div>
    </div> 
    

    </nav>
  )
}

export default Navbar
