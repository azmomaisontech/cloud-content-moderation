import * as express from "express";
import upload from "../controllers/upload";
const router = express.Router()

router.route("/").post(upload)

export default router;
