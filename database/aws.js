const AWS = require('aws-sdk');
const Credentials = require ('../config.js');
const mongoose = require('mongoose');





//configuring the AWS environment
//This function will retrieve the Credentials from config.js.
//These credentials have been created in Amazon S3. The name of the Bucket is the name of the Bucket created in S3 where I have previously stored 100 images related to products.


(async function () {
  try {
    //connects to Amazon S3
    AWS.config.update({
      accessKeyId: Credentials.AccessKeyID,
      secretAccessKey: Credentials.SecretAccessKey,
      region: 'us-east-1'
    });
    //Access the Bucket and retrieves all files in the Bucket
    s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'renderingimagesforetsy'
    }).promise()
    //console.log(response.Contents[0].Key)
    var contents = response.Contents
    var imagesArray= []
 //   console.log(contents)
    deleteTable()
    for (var image of contents){
      let newImage = new Image ({url: 'https://s3.amazonaws.com/renderingimagesforetsy/' + image.Key})
      newImage.save()
    }
    // console.log(imagesArray)

  //  Image.insertMany(imagesArray, function(err, res) {
  //         if (err) throw err;
  //         console.log(res);

  //   })

    //console.log(response)

  } catch (e) {
    console.log('our error', e);
  }
})();

const {Image} = require ('./index.js')


function deleteTable () {
  mongoose.connection.dropCollection(('images'), function (err, result) {
    if (err) {
        console.log("error delete collection");
    } else {
        console.log("delete collection success");
    }
  })

}





// var contents = response.Contents
// var imagesArray= []
// //   console.log(contents)
// for (var image of contents){
//   imagesArray.push('https://s3.amazonaws.com/renderingimagesforetsy/' + image.Key)
// }
// // console.log(imagesArray)
// deleteTable()
// Image.insertMany(imagesArray, function(err, res) {
//       if (err) throw err;
//       console.log(res);

// })

// //console.log(response)

// } catch (e) {
// console.log('our error', e);
// }
// })();








//console.log(Image)
// var twoLink = new Image ({url: 'elotrourldellink'})
// twoLink.save();



// let seeding = function () {

// Images.drop();
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







