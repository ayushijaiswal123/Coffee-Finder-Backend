
const port = 8000;
const axios = require('axios');
const express = require('express');
const cors = require('cors');

const { json } = require('body-parser');
var request = require('request');
const app = express();

app.use(json());
app.use(cors());
app.get('/',(req,res)=>{
    axios.get()
})
app.get('/cafes/:query', (req, res) => {    
        axios.get(`http://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&location=${req.params.query}&q=Coffee&start=20`).then(result => {
            return res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(result.data.local_results));        
            
    }).catch(err => {
        res.status(500).send(err.stack);
        return;
    })
});

module.exports = app;