import Layout from "../../components/layout/layout";
import { Container } from "../../styles/utils";
import Form from "../../components/form/form";
import { ProfileWrapper } from "./styles";
import Avatar from "../../components/avatar/avatar";

export default function Profile() {
  return (
    <Layout>
      <ProfileWrapper>
        <Container>
          <h1>Profile</h1>
          <Form />
          <Avatar />
        </Container>
      </ProfileWrapper>
    </Layout>
  );
}
