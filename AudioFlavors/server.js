const express = require('express');
const audio = require('audio');


const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.get('/version', (req, res) => {
    res.send({ msg:"0.0.1"});
    // console.log("http://31.220.54.182/version")
});


// app.post('/adminLogin', (req, res) => {
//     let userData = req.body;
//     res.send({ user:userData});
// });

let audioInstance = new Audio();
let audioSource, analyser, dataArray

function analyseAudio(){

}



app.listen(process.env.PORT || 3000);
console.log("\n=======>")
console.log("Started Server at http://localhost:3000/ on", new Date().toLocaleString())

