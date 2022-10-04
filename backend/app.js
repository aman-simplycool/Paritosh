const bodyParser = require('body-parser');
const app=require('express');
const port=3000;
require(bodyParser);
app.listen((port)=>{
console.log(`app is running at port no ${port}`);
})