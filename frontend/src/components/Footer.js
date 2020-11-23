import styled from "styled-components";
import NavigationButton from "./NavigationButton";

export default function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavigationButton onClick={sayHello}>Home</NavigationButton>
        <NavigationButton onClick={sayHello}>App</NavigationButton>
      </nav>
    </Wrapper>
  );

  function sayHello() {
    alert("Hello");
  }
}

const Wrapper = styled.footer`
  width: 100vw;
  padding: 20px;
  color: #ffef0c;
  position: fixed;
  bottom: 0;

  nav {
    display: flex;
    justify-content: space-around;
  }
`;
