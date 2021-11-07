import React from "react";
import { FormWrapper } from "./styles";
import Input from "./input";

export default function Form() {
  const [data, setData] = React.useState({
    userId: "",
    profilePic: "",
  });
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    [],
  );

  return (
    <FormWrapper>
      <form>
        <Input
          onChange={handleChange}
          id="user-id"
          label="User Id"
          name="userId"
          value={data.userId}
        />
        <Input
          type="file"
          onChange={handleChange}
          id="profilePic"
          label="Profile Picture"
          name="profilePic"
          value={data.profilePic}
        />
      </form>
    </FormWrapper>
  );
}
