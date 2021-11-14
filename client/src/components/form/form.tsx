import React from "react";
import { FormWrapper } from "./styles";
import Input from "./input";
import useForm from "../../hooks/use-form";

export default function Form() {
  const {handleSubmit, handleChange} = useForm()

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="file"
          onChange={handleChange}
          id="profilePic"
          label="Profile Picture"
          name="profilePic"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
}
