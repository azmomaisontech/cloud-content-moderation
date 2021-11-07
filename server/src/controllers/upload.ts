import type {Response, Request} from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {UploadedFile} from "express-fileupload";
import config from "../config/config";

export default function uploadVideo(req: Request, res: Response) {
  try{
    const file = req.files.file as UploadedFile;
    const extension = file.mimetype.split("/")[1] ?? "png";
    // const filename = `${req.user.id}-${config.mode}-video.${extension}`;
    // const params = {
    //   Bucket: "cll-world",
    //   Key: `video-uploads/${filename}`,
    //   Body: file.data,
    // };
    // await s3Client.send(new PutObjectCommand(params));
    // const videoUrl = `${config.s3BucketUrl}/${filename}`;
    // await req.user.update({ videoUrl });
    res.json({ messages: { server: "Video uploaded" } });
  }catch (error){
    console.error(error);
    res.status(500).json({ errors: { server: "Failed to upload video" } });
  }
}
