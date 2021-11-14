import React from "react";
import api from "../services/api";

export default function useForm(afterSubmit: () => void) {
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploading, setUploading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [profilePic, setProfilePic] = React.useState<File | null>();

  const handleChange = React.useCallback((event) => {
    if (event.target.name === "profilePic") {
      const [file] = event.target.files;
      setProfilePic(file);
    }
  }, []);

  const handleSubmit = React.useCallback(
    async (event) => {
      event.preventDefault();
      setUploading(true);
      if (!profilePic) return;
      const res = await api.uploadImage(profilePic, setUploadProgress);
      const errors = res.errors ?? {};
      setUploading(false);
      setUploaded(Object.keys(errors).length === 0);
      setErrors(errors);
      setProfilePic(null);
      if (afterSubmit) {
        afterSubmit();
      }
    },
    [profilePic, afterSubmit],
  );

  return {
    handleChange,
    handleSubmit,
    profilePic,
    uploadProgress,
    uploading,
    uploaded,
    errors,
  };
}
