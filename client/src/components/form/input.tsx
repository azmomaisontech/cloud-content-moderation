import React from "react";
import { InputGroup } from "./styles";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "file";
  name?: string;
  value?: any;
  required?: boolean;
  label: string;
  id: string;
};

export default function Input(props: Props) {
  return (
    <InputGroup>
      <label htmlFor={props.id}>{props.label} : </label>
      <input {...props} />
    </InputGroup>
  );
}
