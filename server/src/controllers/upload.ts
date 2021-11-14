import type { Response, Request } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { UploadedFile } from "express-fileupload";
import User from "../models/user";
import config from "../config/config";

const s3Client = new S3Client({
  region: "eu-west-2",
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export default async function upload(req: Request, res: Response) {
  try {
    const file = req.files.file as UploadedFile;
    const extension = file.mimetype.split("/")[1] ?? "png";
    const userId = file.name;
    const filename = `${userId}.${extension}`;
    const params = {
      Bucket: config.s3BucketName,
      Key: `${config.s3ImageFolder}/${filename}`,
      Body: file.data,
      ACL:'public-read'
    };
    await s3Client.send(new PutObjectCommand(params));
    const imageUrl = `${config.s3BucketUrl}/${filename}`;
    await User.create({
      userId,
      profilePic: imageUrl,
    });
    res.json({ data: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: { server: "Failed to upload video" } });
  }
}
