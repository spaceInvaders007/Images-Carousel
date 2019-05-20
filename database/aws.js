const AWS = require('aws-sdk');
const Credentials = require ('../config.js');



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

    console.log(response)

  } catch (e) {
    console.log('our error', e);
  }
})();



let seeding = function () {
  console.log(db.Images)
  // db.Images.drop();
  let imageCollection = [];
  for (let i = 0; i <= 100; i ++){
    var image = new db.Images({
      imageUrl: `http://lorempixel.com/800/800`
    });
    imageCollection.push(image)
  }
  db.Images.insertMany(imageCollection, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
}

seeding();


module.exports.seeding = seeding;







// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

// s3.listBuckets()

// const response = await s3.listObjectsV2({
//   Bucket: 'renderingimagesforetsy'
// }).promise()

// console.log(response)


// var s3 = new AWS.S3();
// var filePath = "./data/file.txt";

// //configuring parameters
// var params = {
//   Bucket: '<Bucket Name Here>',
//   Body : fs.createReadStream(filePath),
//   Key : "folder/"+Date.now()+"_"+path.basename(filePath)
// };

// s3.upload(params, function (err, data) {
//   //handle error
//   if (err) {
//     console.log("Error", err);
//   }

//   //success
//   if (data) {
//     console.log("Uploaded in:", data.Location);
//   }
// });