import * as express from "express";
import uploadVideo from "../controllers/upload";
const router = express.Router()

router.post("/upload", uploadVideo)

export default router;
