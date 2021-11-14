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

function Input(props: Props, ref: any) {
  return (
    <InputGroup>
      <label htmlFor={props.id}>{props.label} : </label>
      <input {...props} ref={ref} />
    </InputGroup>
  );
}

export default React.forwardRef(Input);
