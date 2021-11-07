import React from "react";
import { InputGroup } from "./styles";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  type?: "text" | "file";
  name: string;
  value?: any;
  required?: boolean;
  label: string;
  id: string;
};

export default function Input({
  onChange,
  name,
  value,
  label,
  id,
  type = "text",
  required = false,
}: Props) {
  return (
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value ?? undefined}
        onChange={onChange}
        required={required}
      />
    </InputGroup>
  );
}
