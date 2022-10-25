const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Express running succesfully');
})

app.listen(port, () => {
  console.log(`Exprss running on port: ${port}`)
})