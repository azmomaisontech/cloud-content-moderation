import React from "react";
import {Image, ProfilePicWrapper, Review} from "./styles";
import {useAppState} from "../../app-state/app-state";

type Props = {
  reviewing?: boolean;
};

export default function ProfilePic({reviewing = false }: Props) {
  const {image} = useAppState()
  return (
    <ProfilePicWrapper>
      {image && <Image src={image?.src} alt={image?.alt} />}
      {reviewing && <Review>Under Review <br /> Please Wait</Review>}
    </ProfilePicWrapper>
  );
}
