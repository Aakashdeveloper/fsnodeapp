const express = require('express');
const fs =  require('fs')
const app = express();
const port = 4500;

app.get('/', (req,res) => {
    fs.readFile('myText.txt','utf-8',(err,data) => {
        if (err) throw err;
        res.send(data)
    })

});
app.get('/movies', (req,res) => {
   fs.readFile('db.json', (err,data) => {
    if (err) throw err;
       res.send(JSON.parse(data))
   })
});

app.get('/product', (req,res) => {
    res.send('This is product page')
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`server is running on port ${port}`)
});