import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/stores">Stores</NavLinkStyled>
        <NavLinkStyled to="/search">Search</NavLinkStyled>
      </nav>
    </Wrapper>
  );
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

const NavLinkStyled = styled(NavLink)`
  background: ${Colors.primaryBackground};
  border: none;
  border-radius: 6px;
  color: ${Colors.text};
  padding: 0.5rem 0.6rem;
  text-align: center;
  text-decoration: none;
  width: 5rem;

  &:hover {
    color: lightgreen;
  }
`;
