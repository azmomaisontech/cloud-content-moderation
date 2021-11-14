import React from "react";
import { FormWrapper } from "./styles";
import Input from "./input";
import useForm from "../../hooks/use-form";

export default function Form() {
  const profilePicRef = React.useRef<HTMLInputElement>();

  const afterSubmit = React.useCallback(() => {
    if (profilePicRef.current) {
      profilePicRef.current.value = "";
    }
  }, []);
  const { handleSubmit, handleChange } = useForm(afterSubmit);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          ref={profilePicRef}
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
