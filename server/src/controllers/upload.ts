import type { Response, Request } from "express";
import { UploadedFile } from "express-fileupload";
import User from "../models/user";
import config from "../config/config";
import s3Upload from "../services/s3Upload";
import moderation from "../services/moderation";

export default async function upload(req: Request, res: Response) {
  try {
    const file = req.files.file as UploadedFile;
    const userId = file.name;
    const { error: s3Error, filename } = await s3Upload(file);
    if (s3Error) {
      return res.status(500).json({ errors: { server: s3Error } });
    }
    const imageUrl = `${config.s3BucketUrl}/${filename}`;
    const {error: azureError, goodImage} =  await moderation(imageUrl);
    if (azureError) {
      return res.status(500).json({ errors: { server: azureError } });
    }
    const {__v, _id, userRes} = await User.create({
      userId,
      profilePic: imageUrl,
      reviewed: true,
      goodImage
    });
    res.status(200).json({ data: userRes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: { server: "Failed to upload video" } });
  }
}
