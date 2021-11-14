import React from "react";
import api from "../services/api";
import { useAppState } from "../app-state/app-state";

export default function useForm(afterSubmit: () => void) {
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
      const { setUploadProgress, setUploading, setUploaded, setImage } =
        useAppState.getState();
      setUploading(true);
      if (!profilePic) return;
      const res = await api.uploadImage(profilePic, setUploadProgress);
      const errors = res.errors ?? {};
      setUploading(false);
      setUploaded(Object.keys(errors).length === 0);
      setErrors(errors);
      if(res.status === 200) {
        setImage({
          src: res.data,
          alt: "Blue Box"
        })
      }
      // setImage({ src: res.data.imageUrl, alt: "10" });
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
    errors,
  };
}
