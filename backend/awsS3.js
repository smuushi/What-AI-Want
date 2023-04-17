const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
// console.log(accessKey);
// console.log(secretKey);
const AWS = require("aws-sdk");
// const multer = require("multer"); // might not use since our files are just 3mb at a time.. 
const s3 = new AWS.S3({ apiVersion: "2006-03-01", accessKeyId: accessKey, secretAccessKey: secretKey});
const NAME_OF_BUCKET = "what-ai-want-mern-dev"; // <-- Use your bucket name here
const fs = require("fs")

const fetch = require("node-fetch")

const singleFileUpload = async (buffer, title) => {
    // const { originalname, buffer } = file;
    // const path = require("path");
  
    // Set the name of the file in your S3 bucket to the date in ms plus the
    // extension name.

    // const filee = new File([blob], title)


    // var imageBuffer = blob.buffer
    
    // let imageFile = buffer.toString(`base64`)


    // var data = {
    //     Key: FileName,
    //     Body: buffer,
    //     ContentEncoding: 'base64',
    //     ContentType: 'image/jpeg'
    // };


    const Key = new Date().getTime().toString() + title;
    const uploadParams = {
      Bucket: NAME_OF_BUCKET,
      Key: Key,
      Body: buffer,
      ContentType: 'image/jpeg'
    };
    const result = await s3.upload(uploadParams).promise();
  
    // Return the link if public. If private, return the name of the file in your
    // S3 bucket as the key in your database for subsequent retrieval.



    return result.Key;
};

const multipleFilesUpload = async ({files, public = false}) => {
    return await Promise.all(
      files.map((file) => {
        return singleFileUpload({file, public});
      })
    );
};


// supply an object key!
const retrievePrivateFile = (key) => {
    let fileUrl;
    if (key) {
      fileUrl = s3.getSignedUrl("getObject", {
        Bucket: NAME_OF_BUCKET,
        Key: key
      });
    }
    return fileUrl || key;
};


const uploadToAWSWithURL = async (url, title) => {
    // const theFile = require("fs").createWriteStream("tmp/goog.png")

    const res = await fetch(url)

    // console.log(res)

    const blob = await res.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer)

    // console.log(buffer)
    // const file = await fs.writeFile(title, buffer)

    // console.log(file)

    // const buffer = await blob.arrayBuffer();

    singleFileUpload(buffer, title);
}

// uploadToAWSWithURL("https://cdn.discordapp.com/attachments/1096463008143781951/1097524638646542446/img-LtMfF5kyXN3ha0Jeo8sxhvee.png", "testupload.png")



// var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
// var url = s3.getSignedUrl('getObject', params);
// console.log('The URL is', url);

const getUrlFromAwsWithKey = async (key) => {
    const url = s3.getSignedUrl("getObject",{
        Bucket: NAME_OF_BUCKET, 
        Key: key,
        Expires: 1200
    })

    console.log(url)
    return url
}

// getUrlFromAwsWithKey("1681761471543testupload.png")

module.exports = {
  s3,
  singleFileUpload,
  multipleFilesUpload,
  retrievePrivateFile,
  uploadToAWSWithURL,
  getUrlFromAwsWithKey
};