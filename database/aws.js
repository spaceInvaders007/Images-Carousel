const AWS = require('aws-sdk');
const Credentials = require ('../config.js');
const fs = require('fs');
const path = require('path');



(async function () {
  try {
    AWS.config.update({
      accessKeyId: Credentials.AccessKeyID,
      secretAccessKey: Credentials.SecretAccessKey,
      region: 'us-east-1'
    });

    s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'renderingimagesforetsy'
    }).promise()

    console.log(response)

  } catch (e) {
    console.log('our error', e);
  }
})();


//configuring the AWS environment






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