import Layout from "../../components/layout/layout";
import { Container } from "../../styles/utils";
import Form from "../../components/form/form";
import { ProfileWrapper } from "./styles";
import ProfilePic from "../../components/profile-pic/profile-pic";

export default function Profile() {
  return (
    <Layout>
      <ProfileWrapper>
        <Container>
          <h1>Profile</h1>
          <Form />
          <ProfilePic />
        </Container>
      </ProfileWrapper>
    </Layout>
  );
}
