const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cors = require('cors')

dotenv.config();

//connection of URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//DataBase Name
const dbName = "BeCreative";
const app = express();
const port = 3000;
app.use(bodyparser.json())
app.use(cors())

client.connect();

//get passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//save passwords
app.post("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.insertOne(password)
  res.send({success:true})
});

//delete a passwords
app.delete("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.deleteOne(password)
  res.send({success:true})
});


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
