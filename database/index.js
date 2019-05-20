
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/images', {
  useMongoClient: true,
});

let imageSchema = new mongoose.Schema({
  url:  { type : String }
})



const Image = mongoose.model('Image', imageSchema);

var oneLink = new Image ({url: 'elurldellink'})

console.log(oneLink.url)



let save = image => {
  var data = new Image ({
    url: image.imageUrl
  })
  data.save (err => {
    if (err) return console.log(err)
  })
}

oneLink.save();



// const dropCollection = (callback) => { // clears whole db
//   Image.dropCollection()
// }
// // dropCollection()
// Image.deleteMany({url: true})
// console.log(Image.deleteMany)

//let fetch = (callback) => {
//   Images.find((error, results) => {
//     if (error) {
//       callback(error, null);
//       return
//     }
//   var images = {};
//   for (let i = 0; i < results.length; i ++) {
//     if(images[results[i].imageUrl] === undefined)
//   }
//   })
// }


module.exports.Image = Image;
module.exports.save = save;
// bye S
