import env from "../env";

export default {
  mode: env.mode,
  port: env.port,
  appUrl: env.appUrl,
  fileUploadLimit: env.fileUploadLimit,
  mongoDBUrl : env.database.mongoDB,
  s3BucketUrl: env.database.s3Bucket
}
