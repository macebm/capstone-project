import styled from "styled-components/macro";
import FontSizes from "../constants/FontSizes";
import NavigationButton from "./NavigationButton";

export default function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavigationButton onClick={sayHello}>About</NavigationButton>
        <NavigationButton onClick={sayHello}>Stores</NavigationButton>
      </nav>
    </Wrapper>
  );

  function sayHello() {
    alert("Hello");
  }
}

const Wrapper = styled.footer`
  background: none;
  bottom: 0;
  font-size: ${FontSizes.verysmall};
  min-height: 3.75rem;
  position: fixed;
  width: 100vw;

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;
  }
`;
