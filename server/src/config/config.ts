import env from "../env";

export default {
  mode: env.mode,
  port: env.port,
  appUrl: env.appUrl,
  fileUploadLimit: env.fileUploadLimit,
  mongoDBUrl : env.database.mongoDB,
  s3BucketUrl: env.s3Bucket.url,
  s3AccessKey: env.s3Bucket.accessKey,
  s3SecretKey: env.s3Bucket.secretKey,
  s3Region: env.s3Bucket.region,
  s3BucketName: env.s3Bucket.bucketName,
  s3ImageFolder: env.s3Bucket.imageFolder
}
