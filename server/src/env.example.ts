export default {
  mode: "development",
  port: 8080,
  appUrl: "http://localhost:3000",
  // 2 MB
  fileUploadLimit: 2 * 1024 * 1024,
  database: {
    mongoDB: "",
    s3Bucket: ""
  }
};
