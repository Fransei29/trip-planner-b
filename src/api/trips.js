import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;

export default async function handler(req, res) {
  // Configurar encabezados CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // o especifica tu dominio: 'https://tu-dominio.vercel.app'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Cabeceras permitidas

  // Responde a las peticiones OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Lógica para manejar las solicitudes POST y GET
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
