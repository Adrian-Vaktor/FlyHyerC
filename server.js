const express = require('express');
const serveIndex = require('serve-index')
const app = express();
const path = require('path')


// //middleware
app.use('/', express.static(path.join(__dirname, 'public')))

// app.use('/', (req,res,next) => {

//     next();
// })

app.use(express.static('public'));


app.get('/', (req,res) => {
    res.send('success')
})

app.listen(3000, ()=> console.log('Example app is listening on port 3000.'))