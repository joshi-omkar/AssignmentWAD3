const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('Public'));

app.listen(PORT, ()=>{
    console.log(PORT)
})
