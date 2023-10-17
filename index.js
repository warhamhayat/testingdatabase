const mysql = require('mysql2');
const dotenv = require('dotenv');

const express = require('express');
const app = express();

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const cek = process.env.DB_DATABASE

console.log(cek)
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send("its working")
})

app.listen(8000,async () => {
  await db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the database');
  });
  console.log(`Server is running on port 8000`);
});