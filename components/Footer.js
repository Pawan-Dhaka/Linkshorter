import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-gray-400 py-2">
                <div className=" px-4 mx-auto ">
                    <div className="flex flex-col md:flex-row justify-between items-center ">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Link<span className="text-pink-500">SHORTNER</span>
                            </h2>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <Link href="/" className="hover:text-pink-500 transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-pink-500 transition-colors">
                                About
                            </Link>
                            <Link href="https://www.instagram.com/arisepawan" className="hover:text-pink-500 transition-colors">
                                Contact Us
                            </Link>
                            <Link href="/demo" className="hover:text-pink-500 transition-colors">
                                How it Works?
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-2 pt-2 text-center text-sm">
                        &copy; {new Date().getFullYear()} LinkSHORTNER. Made with ❤️ by Pawan Dhaka.
                    </div>
                </div>
            </footer>




        </>
    )
}

export default Footer