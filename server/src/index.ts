import * as express from "express";
import * as fileUpload from "express-fileupload";
import * as cors from "cors";
import config from "./config/config";
import upload from "./routes/upload";
import connectDatabase from "./services/database";

const app = express();

connectDatabase().catch(() => {
  process.exit(1)
})

app.use(express.json());
app.use(cors({ origin: config.appUrl, credentials: true }));
app.use(
  fileUpload({
    limits: { fileSize: config.fileUploadLimit },
  }),
);
app.use("/api/v1/uploads", upload)

app.all("*", (req, res) => {
  res.status(404).json({ errors: { server: "Not found" } });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
