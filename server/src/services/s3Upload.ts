import config from "../config/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { UploadedFile } from "express-fileupload";

const s3Client = new S3Client({
  region: "eu-west-2",
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export default async function s3Upload(
  file: UploadedFile,
): Promise<{ error: string; filename: string }> {
  try {
    const extension = file.mimetype.split("/")[1] ?? "png";
    const userId = file.name;
    const filename = `${userId}.${extension}`;
    const params = {
      Bucket: config.s3BucketName,
      Key: `${config.s3ImageFolder}/${filename}`,
      Body: file.data,
      ACL: "public-read",
    };
    const result = await s3Client.send(new PutObjectCommand(params));
    if (result["$metadata"].httpStatusCode === 200) {
      return { error: "", filename };
    }
    return { error: "Failed to upload object to s3", filename: "" };
  } catch (error) {
    return { error: String(error), filename: "" };
  }
}
