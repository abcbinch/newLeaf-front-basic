//npm i aws-sdk
//npm i multer-s3@2.10.0
const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");

const app = express();
const PORT = 8084;
dotenv.config();

//view engine 설정정
app.set("view engine", "ejs");

//aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

//multer 설정
//기존 버전전
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb)=>{
//         const ext = path.extname(file.originalname);//확장자를 추가해준다.
//         cb(null, path.basename(file.originalname, ext)+Date.now() + ext);
//     },
// })

//multer 설정 ver2
//클라우드에 저장
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", //파일 접근 권한 설정
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});
console.log("aws.config.credentials", aws.config.credentials);
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);

  /* {
  fieldname: 'image',
  originalname: 'ê·\x80ì\x97¬ì\x9B\x8C ì§¤.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  size: 10128,
  bucket: 'lhm-bucket',
  key: '1738561129742-ê·\x80ì\x97¬ì\x9B\x8C ì§¤.jpg',
  acl: 'public-read',
  contentType: 'application/octet-stream',
  contentDisposition: null,
  contentEncoding: null,
  storageClass: 'STANDARD',
  serverSideEncryption: null,
  metadata: null,
  location: 'https://lhm-bucket.s3.ap-northeast-2.amazonaws.com/1738561129742-%C3%AA%C2%B7%C2%80%C3%AC%C2%97%C2%AC%C3%AC%C2%9B%C2%8C%20%C3%AC%C2%A7%C2%A4.jpg', 
  etag: '"fb87d1f4bdcf66c185a7a9bd5d9e9bcb"',
  versionId: undefined
} */

  if (req.file) {
    const imageUrl = req.file.location;
    res.render("index", { imageUrl }); //s3에 업로드 된 파일의 경로
  } else {
    res.send("이미지 전송 실패");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
