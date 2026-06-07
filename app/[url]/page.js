import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl  = (await params).url
     const client = await clientPromise;
    const db = client.db("shorturl")
    const collection = db.collection("url")
    let doc = await collection.findOne({ shorturl: shorturl })
    if(doc){
        redirect(doc.url)

    } else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
//   const { url } = await params
//   return <div>My Post: {url}</div>
}