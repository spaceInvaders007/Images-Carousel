// var faker = require('faker');
// var db = require ('./index.js');


// let seeding = function () {
//   console.log(db.Images)
//   // db.Images.drop();
//   let imageCollection = [];
//   for (let i = 0; i <= 100; i ++){
//     var image = new db.Images({
//       imageUrl: `http://lorempixel.com/800/800`
//     });
//     imageCollection.push(image)
//   }
//   db.Images.insertMany(imageCollection, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// }

// seeding();


// module.exports.seeding = seeding;
