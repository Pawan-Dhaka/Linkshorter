"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const generate = ()=>{
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};


fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
      setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
     alert(result.message)})
  .catch((error) => console.error(error));
        
    }
  return (
    <>
    <div className="flex flex-col lg:w-[50vw] mx-auto justify-center items-center gap-5 h-[40vh] ">
        <h1 className='text-3xl poppins-semibold  text-center'>Generate Your short URLs</h1>
        <div className="w-full text-center">
            <input value={url} className=' border  w-[90%] pl-2 p-2 rounded-xl focus:outline-pink-600' type="url" placeholder='Enter Your URL' onChange={e=>{seturl(e.target.value)}} />
        </div>
        <div className="w-full text-center"> 
            <input value={shorturl} className=' border  w-[90%] pl-2 p-2 rounded-xl focus:outline-pink-600' type="text" placeholder='Enter Your preffered Keyword' onChange={e=>{setshorturl(e.target.value)}} />
        </div>
        <div className="w-full text-center">
            <button onClick={generate} className='border  w-[90%] pl-2 p-2 rounded-xl bg-pink-400 text-black font-bold text-xl hover:scale-101  hover:bg-pink-500 disabled:bg-slate-700 disabled:text-white disabled:scale-100' disabled={url.length<2 || shorturl.length <1 }>Generate</button>
        </div>

        {!generated && <>
       <Link className='-mt-2 border border-slate-400 px-2 rounded-2xl' href={'/demo'}>How it works?</Link>
        </> 
        }
        {generated && <>
        <p className='font-bold  ' >Your generated Link &#11015; </p> 
        <div className=" flex text-center -mt-3 gap-2 border  w-[90%] pl-2 p-2 rounded-xl focus:outline-pink-600">
        <Link href={generated}>
        
             <code>{generated}</code> </Link>
        </div>  
        </> 
        }
       

       

    </div>
    </>
  )
}

export default page