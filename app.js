const express = require('express')
require("dotenv").config();

const app = express();

app.get('/', (req,res)=>{
  res.send('Welcome')
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));