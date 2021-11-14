import axios from "axios";
import config from "../config";

export type Response = {
  status?: number;
  data?: any;
  errors?: {
    [key: string]: string;
  };
  messages?: {
    [key: string]: string;
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async uploadImage(
    file: File,
    onProgress?: (progress: number) => void,
  ): Promise<Response> {
    const req = axios.create({
      baseURL: config.apiEndpoint,
    });
    try {
      const formData = new FormData();
      formData.append("file", file, "10");
      const res = await req.post("/api/v1/uploads", formData, {
        onUploadProgress(event) {
          if (!onProgress) return;
          const progress = Math.floor((event.loaded * 100) / event.total);
          onProgress(progress);
        },
      });
      const data: any = res.data;
      return { status: res.status, ...data };
    } catch (error) {
      console.log(error);
      return { errors: { server: "Server Error" } };
    }
  },
};
