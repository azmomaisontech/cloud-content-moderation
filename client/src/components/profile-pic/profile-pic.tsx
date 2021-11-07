import React from "react";
import {Image, ProfilePicWrapper, Review} from "./styles";

type Props = {
  src?: string;
  alt?: string;
  reviewing?: boolean;
};

export default function ProfilePic({ src, alt, reviewing = false }: Props) {
  return (
    <ProfilePicWrapper>
      {src && <Image src={src} alt={alt} />}
      {reviewing && <Review>Under Review <br /> Please Wait</Review>}
    </ProfilePicWrapper>
  );
}
