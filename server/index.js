const express = require('express');
let app = express();
const bodyParser = require ('body-parser');
// var faker = require('faker');
const seeding = require('../database/aws.js')

//var randomname = faker.image.imageUrl()


console.log(seeding)

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());


// app.get('/faker', function (req,res) {
//   res.send(randomname)

// })




let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

