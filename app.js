var express = require('express')
var app = express()
var mongoose = require('mongoose');
const IP = require('./models/ip');


mongoose.connect('mongodb://test:test@ds127375.mlab.com:27375/todo');
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function(req, res) {
  IP.find({}, function(err, ips) {
    res.send(ips);  
  });
});

app.get('/asdf/:id', function(req, res){
  var ip = new IP({
      title: req.params.id
  })

  ip.save().then(c=>{
     res.json(c)
  })
})

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))
