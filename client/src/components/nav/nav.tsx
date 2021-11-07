import { Link } from "react-router-dom";
import { Logo, NavLinks, NavWrapper } from "./styles";
import { Container, FlexBox } from "../../styles/utils";

export default function Nav() {
  return (
    <NavWrapper>
      <Container>
        <FlexBox>
          <Logo>Logo</Logo>
          <NavLinks>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </NavLinks>
        </FlexBox>
      </Container>
    </NavWrapper>
  );
}
