const express = require('express');
const mongoose = require('mongoose');


const app = express()
const port = 5000

//database connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  console.log(`Database connection successful`);
};

main();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})