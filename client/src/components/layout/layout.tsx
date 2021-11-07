import React from "react";
import { ChildrenWrapper, LayoutWrapper } from "./styles";
import Nav from "../nav/nav";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <Nav />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </LayoutWrapper>
  );
}
