const express = require('express');
let app = express();
const bodyParser = require ('body-parser');


app.use(express.static(__dirname + '/../public/dist'));





let port = process.env.PORT || 3030;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

