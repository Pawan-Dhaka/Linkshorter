import clientPromise from "@/lib/mongodb"


export async function POST(req) {
    const body = await req.json()
    const client = await clientPromise;
    const db = client.db("shorturl")
    const collection = db.collection("url")

    //check if the short url exixt

    let doc = await collection.findOne({ shorturl: body.shorturl })
    if(doc){
         return Response.json({ success: false, error: true, message: 'Url already exists.' })
    } else {
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })
    }


    return Response.json({ success: true, error: false, message: 'Url generated succesfully' })
}