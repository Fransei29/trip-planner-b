import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;

export default async function handler(req, res) {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db("tripcost");
  const trips = db.collection("trips");

  if (req.method === "POST") {
    const { name } = req.body;
    const result = await trips.insertOne({ name });
    res.status(200).json({ ok: true, result });
  } else if (req.method === "GET") {
    const items = await trips.find().toArray();
    res.status(200).json({ trips: items });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }

  client.close();
}
