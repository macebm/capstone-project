import styled from "styled-components";
import NavigationButton from "./NavigationButton";

export default function Footer() {
  return (
    <Wrapper>
      <NavigationButton>Home</NavigationButton>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: #57627a;
  color: #ffef0c;
  position: fixed;
  bottom: 0;
`;
