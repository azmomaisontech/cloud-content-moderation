import axios from "axios";
import config from "../config/config";

const axiosConfig = {
  headers: {
    "Content-type": "application/json",
    "Ocp-Apim-Subscription-Key": config.azureKey,
  },
};

export default async function moderation(imageUrl: string):Promise<{ error: string; goodImage: boolean }> {
  const data = {
    DataRepresentation: "URL",
    Value: imageUrl,
  };
  try {
    const res = await axios.post(`${config.azureEndpoint}/contentmoderator/moderate/v1.0/processImage/Evaluate`, data, axiosConfig);
    return {
      error: "",
      goodImage:  !res?.data?.IsImageAdultClassified && !res?.data?.IsImageAdultClassified
    }
  } catch (error) {
    return { error: String(error), goodImage: false };
  }
}
