import React from "react";
import { Image, ProfilePicWrapper, Review, UploadProgress } from "./styles";
import { useAppState } from "../../app-state/app-state";

export default function Avatar() {
  const { image, reviewed, uploadProgress, uploading, uploaded } =
    useAppState();
  return (
    <ProfilePicWrapper>
      {image && <Image src={image?.src} alt={image?.alt || "User 1"} />}
      {!uploaded && uploading && uploadProgress && (
        <UploadProgress>{uploadProgress}</UploadProgress>
      )}
      {reviewed && (
        <Review>
          Under Review <br /> Please Wait
        </Review>
      )}
    </ProfilePicWrapper>
  );
}
