
const express = require('express')
const app = express()
const env = require("./config/envConfig");
const connect = require("./config/dbConfig");
const port = env.PORT || 5000
connect();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})