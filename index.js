const express = require("express")
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express()

const url = 'mongodb+srv://seilerfranco317:Q1Ed2T6trHVqKI0g@tripcost.o6yrq.mongodb.net/?retryWrites=true&w=majority&appName=tripcost'

let db, trips, expenses

// Conexión a MongoDB
MongoClient.connect(url)
  .then(client => {
    db = client.db("tripcost");
    trips = db.collection("trips");
    expenses = db.collection("expenses")
    console.log("Connected to Mongo");
  })
  .catch(err => {
    console.log("Error debido a", err);
});

app.use(cors()); 
app.use(express.json())

app.post("/trips", (req, res) => {
    const name = req.body.name
    trips.insertOne({ name: name }, (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      console.log(result)
      res.status(200).json({ ok: true })
    })
})

app.get("/trips", (req, res) => {
    trips.find().toArray((err, items) => {
        if (err) {
          console.error(err)
          res.status(500).json({ err: err })
          return
        }
        res.status(200).json({ trips: items })
      })
})

app.post("/expenses", (req, res) => {
  expenses.insertOne(
  {
    trip: req.body.trip,
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    description: req.body.description,
  },
  (err, result) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ ok: true })
  }
  )
})

app.get("/expenses", (req, res) => {
  expenses.find({ trip: req.query.trip }).toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ expenses: items })
  })
})


app.listen(3000, () => console.log("Server ready"))