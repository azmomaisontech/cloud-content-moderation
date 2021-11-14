import React from "react";
import api from "../services/api";

export default function useForm() {
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploading, setUploading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [profilePic, setProfilePic] = React.useState<File>();

  const handleChange = React.useCallback((event) => {
    if (event.target.name === "profilePic") {
      const [file] = event.target.files;
      setProfilePic(file)
    }
  }, []);

  const handleSubmit = React.useCallback(
    async (event) => {
      event.preventDefault();
      setUploading(true);
      if(!profilePic) return;
      const res = await api.uploadImage(profilePic, setUploadProgress);
      console.log(res)
      const errors = res.errors ?? {};
      setUploading(false);
      setUploaded(Object.keys(errors).length === 0);
      setErrors(errors);
    },
    [profilePic],
  );

  return { handleChange, handleSubmit, profilePic };
}
