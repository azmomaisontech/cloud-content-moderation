import * as mongoose from "mongoose"
import config from "../config/config";

export default async function connectDatabase(){
  await mongoose.connect(config.mongoDBUrl).then(() => {
    console.log("Database connected successfully")
  }).catch((error) => {
    console.log(error)
  })
}
